import { addTask } from './handlers.js';

/* Функция добавленеи слушателя на кнопку добавить */
export function addEventListenerToAddBtn() {
  const btnAdd = document.querySelector('.btnAdd');
  btnAdd.addEventListener('click', addTask);
}
