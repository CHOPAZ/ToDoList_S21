import { addEventListenerToAddBtn } from '../modules/handlerTasks.js';
import { renderTasks } from '../modules/handlers.js';

/* Инициализация приложения */
(() => {
  addEventListenerToAddBtn();
  renderTasks();
})();
