import { EnumUtils } from '../lib/enum-utils';

export enum TipMaterialEnum {
  Wood,
  Bone,
  Flint,
  Obsidian,
}

export function getRandomTipMaterial(): TipMaterialEnum {
  return EnumUtils.getRandomValue(TipMaterialEnum);
}
