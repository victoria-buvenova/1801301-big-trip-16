const template = ({
  totalPrice,
  everything,
  futureTrips,
  pastTrips,
  table,
  stats,
  newEvent,
  destinationCities,
  startDateEndDate
}) => `<div class="trip-main">
<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">${destinationCities}</h1>

    <p class="trip-info__dates">${startDateEndDate}</p>
  </div>

  <p class="trip-info__cost">
    Total: €&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
  </p>
</section>

<div class="trip-main__trip-controls  trip-controls">
  <div class="trip-controls__navigation">
    <h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${table}</a>
      <a class="trip-tabs__btn" href="#">${stats}</a>
    </nav>
  </div>

  <div class="trip-controls__filters">
    <h2 class="visually-hidden">Filter events</h2>
    <form class="trip-filters" action="#" method="get">
      <div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">
        <label class="trip-filters__filter-label" for="filter-everything">${everything}</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
        <label class="trip-filters__filter-label" for="filter-future">${futureTrips}</label>
      </div>

      <div class="trip-filters__filter">
        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
        <label class="trip-filters__filter-label" for="filter-past">${pastTrips}</label>
      </div>

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
  </div>
</div>

<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">${newEvent}</button>
</div>`;

const createItem = () => ({
  dateFrom: new Date (2021, 12 * Math.random(), 20 * Math.random()).toISOString(),
  dateTo: new Date (2021, 12 * Math.random(), 20 * Math.random()).toISOString(),
  destination: ['London', 'Paris', 'Auckland'][Math.floor(3 * Math.random())]
});

const tripDz = Array.from({length: 15}, createItem);

const reducerDz = (accumulator, item) => {
  if(accumulator.startDate === 'not found' || accumulator.startDate > item.dateFrom) {
    accumulator.startDate = item.dateFrom;
    accumulator.startPoint = item.destination;
  }

  if(accumulator.endDate  === 'not found' || accumulator.endDate  < item.dateTo) {
    accumulator.endDate = item.dateTo;
    accumulator.endPoint = item.destination;
  }

  return accumulator;
};

const initDz = () => (
  {
    startPoint: 'not found',
    startDate: 'not found',
    endPoint: 'not found',
    endDate: 'not found',
  }
);

const startFinish = () => tripDz.reduce(reducerDz, initDz());
// eslint-disable-next-line no-console
console.log(startFinish());


export const createTripTitleTemplate = () => template({
  totalPrice: 'Total price',
  everything: 'all trips',
  futureTrips: 'future trips',
  pastTrips: 'past trips',
  table: 'The table',
  stats: 'statistics',
  newEvent: 'new event button',
  destinationCities: 'Ch - G - A',
  startDateEndDate: 'start & end'
});
