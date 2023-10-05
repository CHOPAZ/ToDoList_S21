import { deleteTask } from './handlers.js';
import { changeStatusTask } from './handlers.js';

/* Функция создания книпки удаления и присвоенеи слушателя */
export function createDeleteButton(item) {
  const btnDel = document.createElement('button');
  btnDel.classList.add('btnDel');
  btnDel.addEventListener('click', deleteTask.bind(this, item));
  return btnDel;
}

/* Функция создание checkboxb и добавления на него слушателя */
export function createInputToChangeStatus(item) {
  const inputCheckBox = document.createElement('input');
  inputCheckBox.type = 'checkbox';
  inputCheckBox.classList.add('checkbox');
  inputCheckBox.addEventListener('click', changeStatusTask.bind(this, item));
  return inputCheckBox;
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
  const inputCheckBox = createInputToChangeStatus(item);

  const listCardInput = document.createElement('div');
  listCardInput.classList.add('toDo__list-input');
  listCardInput.innerHTML = `${item.text}`;

  listCardInput.prepend(inputCheckBox);
  listCard.prepend(listCardInput);
  listCard.append(deleteButton);
  list.appendChild(listCard);
}
