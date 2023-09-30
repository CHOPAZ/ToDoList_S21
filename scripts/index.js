import { list } from '../modules/variables.js';
import { tasksList } from '../modules/storage.js';
import { deletTask, changeStatusTask } from '../modules/handlerTasks.js';
/* Функция создания элементов в разметке */

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
  <button class="btnDel" onclick="deletTask(event)" data-id="${item.id}">
  </button>
  `;
  list.appendChild(listCard);
}
/* Рендер задач */
export function renderTasks() {
  list.innerHTML = '';
  for (let el of tasksList) {
    createItem(el);
  }
}

renderTasks();
