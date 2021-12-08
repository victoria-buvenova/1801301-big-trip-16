import { renderTemplate } from './render.js';
import { createHeaderTemplate } from './view/header.js';
import { createMainTemplate } from './view/main.js';
import { createTripTitleTemplate } from './view/trip-title.js';

const renderHeader = (container) => {
  renderTemplate(container, createTripTitleTemplate());
};

const app = (body) => {
  renderTemplate(body, createHeaderTemplate());
  renderHeader(body.querySelector('.page-header__container'));
  renderTemplate(body, createMainTemplate());
};
app(document.body);


// import {createSiteMenuTemplate} from './view/create-form-view.js';
// import {createFilterTemplate} from './view/filters-view.js';
// import {createTaskTemplate} from './view/itinerary-point.js';
// import {createTaskEditTemplate} from './view/edit-form-view.js';
// import {createLoadMoreButtonTemplate} from './view/sorting-view.js';
// import {createBoardTemplate} from './view/menu-view.js';
// import {renderTemplate} from './render.js';

// const TASK_COUNT = 3;

// const siteMainElement = document.querySelector('.main');
// const siteHeaderElement = siteMainElement.querySelector('.main__control');

// renderTemplate(siteHeaderElement, createSiteMenuTemplate());
// renderTemplate(siteMainElement, createFilterTemplate());
// renderTemplate(siteMainElement, createBoardTemplate());

// const boardElement = siteMainElement.querySelector('.board');
// const taskListElement = boardElement.querySelector('.board__tasks');

// renderTemplate(taskListElement, createTaskEditTemplate());

// for (let i = 0; i < TASK_COUNT; i++) {
//   renderTemplate(taskListElement, createTaskTemplate());
// }

// renderTemplate(boardElement, createLoadMoreButtonTemplate());
