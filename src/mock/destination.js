import { descriptions } from './descriptions';
import { getRandomItem, makeList, randomIntInRange } from './helpers';
import { picture } from './picture';
import { MOCK_MAX_DESCRIPTION } from './settings';

const cities = ['Moscow','Saint Petersburg','Novosibirsk'];

export const destination = ()=>({
  'description': makeList(
    randomIntInRange(1,MOCK_MAX_DESCRIPTION),
    ()=>getRandomItem(descriptions)
  ),
  'name': getRandomItem(cities),
  'pictures': [
    picture()
  ]
});
