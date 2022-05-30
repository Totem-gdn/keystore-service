import { EnumUtils } from '../lib/enum-utils';

export enum SexEnum {
  Male,
  Female,
}

export function getRandomSex(): SexEnum {
  return EnumUtils.getRandomValue(SexEnum);
}
