export const TASK_KEY = 'TASK_LIST';

/* Загрузка задач из LocalStorage */
export function getTasksListFromStorage() {
  return JSON.parse(localStorage.getItem(TASK_KEY)) ?? [];
}

/* Запись в LocalStorage */
export function setTasksInStorage(elements) {
  localStorage.setItem(TASK_KEY, JSON.stringify(elements));
}
