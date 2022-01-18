const template = ({
  SortType
}) => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
<div class="trip-sort__item  trip-sort__item--day">
  <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked="">
  <label class="trip-sort__btn" for="sort-day" data-sort-type= "${SortType.DEFAULT}">Day</label>
</div>

<div class="trip-sort__item  trip-sort__item--event">
  <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled="">
  <label class="trip-sort__btn" for="sort-event" data-sort-type= "${SortType.BY_PRICE}">Event</label>
</div>

<div class="trip-sort__item  trip-sort__item--time">
  <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
  <label class="trip-sort__btn" for="sort-time" data-sort-type= "${SortType.BY_TIME}">Time</label>
</div>

<div class="trip-sort__item  trip-sort__item--price">
  <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
  <label class="trip-sort__btn" for="sort-price">Price</label>
</div>

<div class="trip-sort__item  trip-sort__item--offer">
  <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled="">
  <label class="trip-sort__btn" for="sort-offer">Offers</label>
</div>
</form>`;

/*const SortType = {
  DEFAULT: 'default',
  BY_PRICE: 'by-price',
  BY_TIME: 'by-time',
};
*/
export const createTripSortTemplate = () => template;

