import { EnumUtils } from '../lib/enum-utils';

export enum ElementEnum {
  Air,
  Earth,
  Water,
  Fire,
}

export function getRandomElement(): ElementEnum {
  return EnumUtils.getRandomValue(ElementEnum);
}
