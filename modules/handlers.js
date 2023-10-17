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
  const tasksList = tasks.filter((el) => el.id !== item.id);
  setTasksInStorage(tasksList);
  renderTasks();
}

/* Добавление новой задачи */
export function addTask(event) {
  event.preventDefault();
  const input = document.querySelector('input');

  if (!input.value) {
    return false;
  }

  const obj = {
    id: Date.now(),
    status: false,
    text: input.value.trim(),
  };
  const tasks = getTasksListFromStorage();
  tasks.push(obj);
  setTasksInStorage(tasks);
  renderTasks();
  input.value = '';
}

/* Изменение статуса задачи */
export function changeStatusTask(item) {
  const tasks = getTasksListFromStorage();

  const changedTask = tasks.map((el) => ({
    ...el,
    status: el.id == item.id ? !el.status : el.status,
  }));

  setTasksInStorage(changedTask);
  renderTasks();
  /* 
  const changedTask = tasks.map((el) => {
    return {
      ...el,
      status: el.id == item.id ? !el.status : el.status,
    }
  } */
}
