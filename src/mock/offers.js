import { offerByType } from './offer-for-type';
import { offerTypes } from './offer-types';

export const offers = offerTypes.map((type)=>offerByType(type));
