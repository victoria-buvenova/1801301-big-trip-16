import { descriptions } from './descriptions';
import { getRandomItem, randomInt } from './helpers';
import { MOCK_PICTURE_FACTOR } from './settings';

export const picture = ()=>({
  'src': `http://picsum.photos/300/200?r=${randomInt(MOCK_PICTURE_FACTOR)}`,
  'description': getRandomItem(descriptions),
});
