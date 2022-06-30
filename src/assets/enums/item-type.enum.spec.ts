import { getRandomItemType, ItemTypeEnum } from './item-type.enum';

const itemTypeValues = [ItemTypeEnum.SPEAR, ItemTypeEnum.SWORD];

test('should generate random ItemTypeEnum', () => {
  expect(itemTypeValues).toContain(getRandomItemType());
});
