const offerTemplate = ({
  id,
  name,
  checked,
  title,
  price
}) => `<div class="event__offer-selector">
<input class="event__offer-checkbox  visually-hidden" id="${id}" type="checkbox" name="${name}" ${checked ? 'checked= ""' : ''}>
<label class="event__offer-label" for="${id}">
  <span class="event__offer-title">${title}</span>
  +€&nbsp;
  <span class="event__offer-price">${price}</span>
</label>
</div>`;

const eventTypeTemplate = ({
  id,
  checked,
  title,
}) => `<div class="event__type-item">
<input id="${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ${checked ? 'checked= ""' : ''}>
<label class="event__type-label  event__type-label--taxi" for="${id}">${title}</label>
</div>`;


const template = ({
  typeIcon,
  eventType,
  destinationCity,
  startDateAndTime,
  endDateAndTime,
  price,
  destinationDescription,
  offers
}) => `<form class="event event--edit" action="#" method="post">
<header class="event__header">
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" src="img/icons/${typeIcon}.png" alt="Event type icon" width="17" height="17">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>

${eventType.map(eventTypeTemplate).join('')}
</fieldset>
</div>
</div>

   <div class="event__field-group  event__field-group--destination">
   <label class="event__label  event__type-output" for="event-destination-1">
   ${eventType.find( (x) => x.checked).title}
 </label>
 <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destinationCity}" list="destination-list-1">
    <datalist id="destination-list-1">
      <option value="Amsterdam"></option>
      <option value="Geneva"></option>
      <option value="Chamonix"></option>
    </datalist>
  </div>

  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">From</label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDateAndTime}">
    —
    <label class="visually-hidden" for="event-end-time-1">To</label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDateAndTime}">
  </div>

  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
      €
    </label>
    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
  </div>

  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
  <button class="event__reset-btn" type="reset">Delete</button>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</header>
<section class="event__details">
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
    ${offers.map(offerTemplate).join('')}
    </div>
  </section>

  <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${destinationDescription}</p>
  </section>
</section>
</form>`;


export const createEditFormTemplate = () => template({
  typeIcon: 'taxi',
  eventType: [
    {
      id: 'event-type-taxi-1',
      checked: false,
      title: 'Taxi'
    },
    {
      id: 'event-type-bus-1',
      checked: false,
      title: 'Bus'
    },
    {
      id: 'event-type-train-1',
      checked: false,
      title: 'Train'
    },
    {
      id: 'event-type-ship-1',
      checked: false,
      title: 'Ship'
    },
    {
      id: 'event-type-drive-1',
      checked: false,
      title: 'Drive'
    },
    {
      id: 'event-type-flight-1',
      checked: true,
      title: 'Flight'
    },
    {
      id: 'event-type-check-in-1',
      checked: false,
      title: 'Check-in'
    },
    {
      id: 'event-type-sightseeing-1',
      checked: false,
      title: 'Sightseeing'
    },
    {
      id: 'event-type-sightseeing-1',
      checked: false,
      title: 'Sightseeing'
    },
    {
      id: 'event-type-restaurant-1',
      checked: false,
      title: 'Restaurant'
    }
  ],
  destinationCity: 'Destination city',
  startDateAndTime: 'start D & T',
  endDateAndTime: 'end D & T',
  price: 'how much?',
  destinationDescription: 'Short description of the destination',
  offers: [
    {
      id: 'event-offer-luggage-1',
      name: 'event-offer-luggage',
      checked: true,
      title: 'Add luggage',
      price: '53'
    },
    {
      id: 'event-offer-comfort-1',
      name: 'event-offer-comfort',
      checked: true,
      title: 'Switch to comfort',
      price: '80'
    },
    {
      id: 'event-offer-meal-1',
      name: 'event-offer-meal',
      checked: false,
      title: 'Add meal',
      price: '15'
    },
    {
      id: 'event-offer-seats-1',
      name: 'event-offer-seats',
      checked: false,
      title: 'Choose seats',
      price: '20'
    },
    {
      id: 'event-offer-train-1',
      name: 'event-offer-train-1',
      checked: false,
      title: 'Travel by train',
      price: '26'
    }
  ]
});
