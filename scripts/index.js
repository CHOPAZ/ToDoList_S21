const TASK_KEY = 'TASK_LIST';
let tasksList = getTasksListFromLocalStorage();

/* Загрузка задач из LocalStorage */
function getTasksListFromLocalStorage() {
  const tasksString = localStorage.getItem(TASK_KEY);
  if (!tasksString) {
    return [];
  }
  return JSON.parse(tasksString);
}

/* Запись в LocalStorage */
function setTasksInLocalStorage() {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasksList));
}

let count = 0;
// tasksList.forEach((item) => (count = Math.max(item.id, count)));

for (let item in tasksList) {
  count = Math.max(item.id, count);
}

const btnAdd = document.querySelector('.btnAdd');
const input = document.querySelector('input');
const list = document.querySelector('.toDo__list');

/* Функция добавления задач из базы данных */
function createItem(item) {
  const listCard = document.createElement('div');
  listCard.classList.add('toDo__list-card');

  if (item.status) {
    listCard.classList.add('toDo__list-card_done');
  } else {
    listCard.classList.add('toDo__list-card_active');
  }

  listCard.innerHTML = `
  <div class="toDo__list-input">
    <input type="checkbox" class="checkbox" onclick="changeStatusTask(event)" data-id="${item.id}"/> ${item.text}
  </div>
  <button class="toDo__btn-delete" onclick="deletTask(event)" data-id="${item.id}">
  </button>
  `;
  list.appendChild(listCard);
}

/* Добавление новой задачи */

btnAdd.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value.trim()) {
    const obj = {
      id: ++count,
      status: false,
      text: input.value,
    };
    tasksList.push(obj);
    setTasksInLocalStorage();
    renderTasks();
    input.value = '';
  }
});

/* Удаление Задачи */

function deletTask(event) {
  tasksList = tasksList.filter((el) => el.id != event.target.dataset.id);
  setTasksInLocalStorage();
  renderTasks();
}

/* Изменение статуса задачи */

function changeStatusTask(event) {
  tasksList.forEach((el) => {
    if (el.id == event.target.dataset.id) {
      el.status = !el.status;
      setTasksInLocalStorage();
      renderTasks();
    }
  });
}

function renderTasks() {
  list.innerHTML = '';
  for (let el of tasksList) {
    createItem(el);
  }
}

renderTasks();
