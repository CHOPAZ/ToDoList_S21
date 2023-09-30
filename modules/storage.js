export const TASK_KEY = 'TASK_LIST';
export let tasksList = getTasksListFromLocalStorage();

/* Загрузка задач из LocalStorage */
function getTasksListFromLocalStorage() {
  const tasksString = localStorage.getItem(TASK_KEY);
  if (!tasksString) {
    return [];
  }
  return JSON.parse(tasksString);
}

/* Запись в LocalStorage */
export function setTasksInLocalStorage() {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasksList));
}
