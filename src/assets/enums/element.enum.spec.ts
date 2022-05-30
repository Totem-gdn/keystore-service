import { ElementEnum, getRandomElement } from './element.enum';

const elementValues = [ElementEnum.Air, ElementEnum.Earth, ElementEnum.Water, ElementEnum.Fire];

test('should generate random ElementEnum', () => {
  expect(elementValues).toContain(getRandomElement());
});
