const template = ({dateFrom, dateTo, dateSort, dateComputer, duration, favorite})=>`<div class="event">
<time class="event__date" datetime="${dateComputer}">${dateSort}</time>
<div class="event__type">
  <img class="event__type-icon" src="img/icons/taxi.png" alt="Event type icon" width="42" height="42">
</div>
<h3 class="event__title">Taxi Amsterdam</h3>
<div class="event__schedule">
  <p class="event__time">
    <time class="event__start-time" datetime="2019-03-18T10:30">${dateFrom}</time>
    —
    <time class="event__end-time" datetime="2019-03-18T11:00">${dateTo}</time>
  </p>
  <p class="event__duration">${duration}</p>
</div>
<p class="event__price">
  €&nbsp;<span class="event__price-value">20</span>
</p>
<h4 class="visually-hidden">Offers:</h4>
<ul class="event__selected-offers">
  <li class="event__offer">
    <span class="event__offer-title">Order Uber</span>
    +€&nbsp;
    <span class="event__offer-price">20</span>
  </li>
</ul>
<button class="event__favorite-btn ${favorite? 'event__favorite-btn--active':''}" type="button">
  <span class="visually-hidden">Add to favorite</span>
  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
  </svg>
</button>
<button class="event__rollup-btn" type="button">
  <span class="visually-hidden">Open event</span>
</button>
</div>`;

const getDuration = (dateFrom='2022-01-12', dateTo='2022-01-13') => (new Date(dateTo).valueOf() - new Date(dateFrom).valueOf())/1000/60;

export const createItineraryPointTemplate = ({dateFrom, dateTo}={dateFrom:'2022-01-12', dateTo:'2022-01-14'}) => template({
  dateFrom:dateFrom,
  dateTo:dateTo,
  dateSort: dateFrom,
  dateComputer: dateFrom,
  duration:getDuration(dateFrom, dateTo),
  favorite:false,
});
