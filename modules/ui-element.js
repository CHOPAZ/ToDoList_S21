import { deleteTask } from './handlers.js';

/* Функция создания книпки удаления и присвоенеи слушателя с контекстом */
export function createDeleteButton(item) {
  const btnDel = document.createElement('button');
  btnDel.classList.add('btnDel');
  btnDel.addEventListener('click', deleteTask.bind(this, item));
  return btnDel;
}

/* Функиц создания разметки элемента задачи */
export function createItem(item) {
  const list = document.querySelector('.toDo__list');
  const listCard = document.createElement('div');
  listCard.classList.add('toDo__list-card');

  if (item.status) {
    listCard.classList.add('toDo__list-card_done');
  } else {
    listCard.classList.add('toDo__list-card_active');
  }

  const deleteButton = createDeleteButton(item);

  listCard.innerHTML = `<div class="toDo__list-input" >
  <input type="checkbox" class="checkbox" onclick="changeStatusTask""/> ${item.text}
  </div>`;

  listCard.appendChild(deleteButton);
  // listCard.appendChild(updateButton); // создать

  list.appendChild(listCard);
}
