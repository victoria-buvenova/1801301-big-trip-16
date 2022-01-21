const columnHeaderTemplate = ({
  columnName,
  label,
  checked,
  disabled
}) => `<div class="trip-sort__item  trip-sort__item--${columnName}">
<input id="sort-${columnName}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${columnName}" ${checked? 'checked = ""' : ''} ${disabled? 'disabled = ""' : ''}>
<label class="trip-sort__btn" for="sort-${columnName}" data-sort-type= "${columnName}">${label}</label>
</div>`;

const columns = [{
  columnName: 'day',
  label: 'Day',
  disabled: false
},
{
  columnName: 'event',
  label: 'Event',
  disabled: true
},
{
  columnName: 'time',
  label: 'Time',
  disabled: false
},
{
  columnName: 'price',
  label: 'Price',
  disabled: false
},
{
  columnName: 'offer',
  label: 'Offers',
  disabled: true
},
];

const template = ({
  selected
}) => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
${columns.map((menuItem) => columnHeaderTemplate({...menuItem, checked: selected === menuItem.columnName})).join('')}
</form>`;

/*const SortType = {
  DEFAULT: 'default',
  BY_PRICE: 'by-price',
  BY_TIME: 'by-time',
};
*/
export const createTripSortTemplate = () => template({
  selected: 'price'
});

