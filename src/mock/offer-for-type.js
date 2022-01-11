import { makeList, randomIntInRange } from './helpers';
import { offerItem } from './offer-item';
import { MOCK_MAX_OFFERS_TAGS, MOCK_MIN_OFFERS_TAGS } from './settings';

export const offerByType = (type)=>({
  'type': type,
  'offers': makeList(randomIntInRange(MOCK_MIN_OFFERS_TAGS, MOCK_MAX_OFFERS_TAGS),offerItem),
});


