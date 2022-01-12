import { getRandomItem, randomIntInRange } from './helpers';
import { MOCK_OFFER_MAX_VALUE, MOCK_OFFER_MIN_VALUE } from './settings';

const titles = 'Add luggage,Switch to comfort,Add meal,Choose seats,Travel by train'.split(',');

export const offerItem = (index)=>({
  'id': index,
  'title': getRandomItem(titles),
  'price': randomIntInRange(MOCK_OFFER_MIN_VALUE, MOCK_OFFER_MAX_VALUE),
});
