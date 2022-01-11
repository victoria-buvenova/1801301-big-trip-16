import { MOCK_DATE_RANGE, MOCK_HOUR_RANGE, MOCK_MINUTE_RANGE, MOCK_POINT_DURATION_MAX, MOCK_POINT_DURATION_MIN } from './settings';

const HOUR_PER_DAY = 24;
const MINUTE_PER_HOUR = 60;
const MILLISECONDS_PER_ONE = 1000;
const SECONDS_PER_MIN = 60;

export const makeList = (length, generator) => Array.from({ length }, (_, ix) => generator(ix));

export const randomIntInRange = (low, delta) => low + Math.floor(delta * Math.random());

export const randomInt = (max) => randomIntInRange(0, max);

export const shiftDate = (
  deltaDays,
  deltaHours,
  deltaMinutes,
  baseDate) => new Date(baseDate.valueOf() + (((deltaDays * HOUR_PER_DAY) + deltaHours * MINUTE_PER_HOUR) + deltaMinutes) * MILLISECONDS_PER_ONE * SECONDS_PER_MIN);

export const mockDateFrom = (index)=> shiftDate(
  -1*randomIntInRange(index, MOCK_DATE_RANGE),
  -1*randomIntInRange(index, MOCK_HOUR_RANGE),
  -1*randomIntInRange(index, MOCK_MINUTE_RANGE),
  new Date(),
);


export const mockDateTo = (dateFrom)=> shiftDate(
  0,
  0,
  randomIntInRange(
    MOCK_POINT_DURATION_MIN,
    MOCK_POINT_DURATION_MAX),
  dateFrom);

export const getRandomItem = (array)=>array[randomInt(array.length)];
