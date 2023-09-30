import { btnAdd, input } from '../modules/variables.js';
import { tasksList, setTasksInLocalStorage } from '../modules/storage.js';
import { renderTasks } from '../scripts/index.js';

/* Объявление глобального индекса для присвоения новым задачам */
export let idx = 0;
for (let item of tasksList) {
  idx = Math.max(item.id, idx);
}

/* Добавление новой задачи */
btnAdd.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value.trim()) {
    const obj = {
      id: ++idx,
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
export function deletTask(event) {
  tasksList = tasksList.filter((el) => el.id != event.target.dataset.id);
  setTasksInLocalStorage();
  renderTasks();
}

/* Изменение статуса задачи */
export function changeStatusTask(event) {
  tasksList.forEach((el) => {
    if (el.id == event.target.dataset.id) {
      el.status = !el.status;
      setTasksInLocalStorage();
      renderTasks();
    }
  });
}
