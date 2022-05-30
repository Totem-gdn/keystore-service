import { EnumUtils } from '../lib/enum-utils';

export enum BodyFatEnum {
  Thin,
  Fat,
}

export function getRandomBodyFat(): BodyFatEnum {
  return EnumUtils.getRandomValue(BodyFatEnum);
}
