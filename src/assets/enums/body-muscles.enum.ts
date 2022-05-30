import { EnumUtils } from '../lib/enum-utils';

export enum BodyMusclesEnum {
  Wimp,
  Muscular,
}

export function getRandomBodyMuscles(): BodyMusclesEnum {
  return EnumUtils.getRandomValue(BodyMusclesEnum);
}
