import { addTask } from './handlers.js';
import { changeStatusTask } from './handlers.js';
/* Функция добавленеи слушателя на кнопку добавить */
export function addEventListenerToAddBtn() {
  const btnAdd = document.querySelector('.btnAdd');

  btnAdd.addEventListener('click', addTask);
}

/* Функция добавления слушателя на кнопку блок задачи */
export function addEventListenerToChangeStatus() {}
