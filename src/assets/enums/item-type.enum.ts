import { EnumUtils } from '../lib/enum-utils';

export enum ItemTypeEnum {
  SPEAR = 'spear',
  SWORD = 'sword',
}

export function getRandomItemType(): ItemTypeEnum {
  return EnumUtils.getRandomValue(ItemTypeEnum);
}
