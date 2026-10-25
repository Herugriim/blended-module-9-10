
import   './js/local-storage-api.js';
import './js/markup-tasks.js';
import './js/refs.js';
import './js/render-tasks.js';
import './js/tasks.js';
import './js/theme-switcher.js';

import { form, list } from './js/refs';
import { createMarkup } from './js/render-tasks';

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach(task => {
  const markup = createMarkup(task.title, task.description);
  list.insertAdjacentHTML('beforeend', markup);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const title = formData.get('taskName').trim();
  const description = formData.get('taskDescription').trim();
  console.log(title, description);
  if (title === '' || description === '') {
    return;
  }
  tasks.push({ title, description });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  const markup = createMarkup(title, description);
  list.insertAdjacentHTML('beforeend', markup);
  form.reset();
});

list.addEventListener('click', event => {
  if (!event.target.classList.contains('task-list-item-btn')) {
    return;
  }
  const taskItem = event.target.closest('.task-list-item');
  taskItem.remove();
  console.log('Нажали Delete');
});
/*

  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

