import { renderTemplate } from './render.js';
import { createHeaderTemplate } from './view/header.js';
import { createMainTemplate } from './view/main.js';
import { createTripTitleTemplate } from './view/trip-title.js';
import { createTripSortTemplate } from './view/sorting-view.js';
import { createEditFormTemplate} from './view/edit-form-view.js';
import { createTripEventsTemplate } from './view/trip-events-view.js';
import { createTripEventItemTemplate } from './view/trip-event-item-view.js';
import { createItineraryPointTemplate } from './view/itinerary-point.js';


const renderSorting = (container) => {
  renderTemplate(container, createTripSortTemplate());
};

const renderHeader = (container) => {
  renderTemplate(container, createHeaderTemplate());
  renderTemplate(container.querySelector('.page-header__container'), createTripTitleTemplate());
};

const renderTripEventData = (container, editing) => {
  renderTemplate(
    container,
    editing? createEditFormTemplate(): createItineraryPointTemplate(),
  );
};

const renderTripEvent = (container, editing) => {
  renderTemplate(container, createTripEventItemTemplate());
  renderTripEventData(
    container.querySelector('.trip-events__item'),
    editing,
  );
};

const renderTripEventsChildren = (container) => {
  Array.from({length: 5}).forEach((_ignore, index) => renderTripEvent(
    container,
    index === 0
  ));
};

const renderTripEvents = (container) => {
  renderTemplate(container, createTripEventsTemplate());
  renderTripEventsChildren(container.querySelector('.trip-events__list'));
};

const renderMainChildren = (container) => {
  renderSorting(container);
  renderTripEvents(container);
};

const renderMain = (container) => {
  renderTemplate(container, createMainTemplate());
  renderMainChildren(container.querySelector('.trip-events'));
};

const app = (body) => {

  renderHeader(body);
  renderMain(body);
};
app(document.body);
