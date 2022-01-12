import { findOffers } from '../utils/find-offers';
import { destination } from './destination';
import { getRandomItem, makeList, mockDateFrom, mockDateTo, randomIntInRange } from './helpers';
import { offerTypes } from './offer-types';
import { offers } from './offers';
import { MOCK_MAX_POINTS, MOCK_MIN_PRICE, MOCK_PRICE_DELTA } from './settings';

export const point = (index)=>{
  const dateFrom = mockDateFrom(index);
  const dateTo = mockDateTo(dateFrom);
  const type = getRandomItem(offerTypes);
  return ({
    'base_price': randomIntInRange(MOCK_MIN_PRICE, MOCK_PRICE_DELTA),
    'date_from': dateFrom.toISOString(),
    'date_to': dateTo.toISOString(),
    'destination': destination(),
    'id': `${index}`,
    'is_favorite': false,
    'offers': findOffers(type, offers),
    'type': type
  });
};

export const mockPointList = ()=> makeList(MOCK_MAX_POINTS, point);
