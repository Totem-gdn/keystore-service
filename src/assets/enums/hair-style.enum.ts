import { EnumUtils } from '../lib/enum-utils';

export enum HairStyleEnum {
  Afro,
  Asymmetrical,
  Braids,
  BuzzCut,
  Dreadlocks,
  Long,
  Ponytail,
  Short,
}

export function getRandomHairStyle(): HairStyleEnum {
  return EnumUtils.getRandomValue(HairStyleEnum);
}
