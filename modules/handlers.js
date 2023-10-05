import { createItem } from './ui-element.js';
import { getTasksListFromStorage, setTasksInStorage } from './storage.js';

/* Рендер задач */
export function renderTasks() {
  const list = document.querySelector('.toDo__list');
  list.innerHTML = '';

  const tasks = getTasksListFromStorage();

  for (let el of tasks) {
    createItem(el);
  }
}

/* Удаление задачи */
export function deleteTask(item) {
  const tasks = getTasksListFromStorage();
  const tasksList = tasks.filter((el) => el.id != item.id);
  setTasksInStorage(tasksList);
  renderTasks();
}

/* Добавление новой задачи */
export function addTask(event) {
  event.preventDefault();
  const input = document.querySelector('input');

  if (input.value.trim()) {
    const obj = {
      id: Date.now(),
      status: false,
      text: input.value,
    };

    const tasks = getTasksListFromStorage();

    tasks.push(obj);
    setTasksInStorage(tasks);

    renderTasks();

    input.value = '';
  }
}

export function changeStatusTask(item) {
  const tasks = getTasksListFromStorage();
  tasks.map((el) => {
    if (el.id == item.id) {
      el.status = !el.status;
      return el.status;
    }
  });
  setTasksInStorage(tasks);
  renderTasks();
}

/* Доделать
1. размететку +
2. изменение статуса задачи
3. импорты привенсти к одному типу +
4. изменить название методов у сторейдж, без привязки к какому именно стореййджу +
5.
*/
