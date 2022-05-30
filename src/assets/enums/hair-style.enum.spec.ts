import { getRandomHairStyle, HairStyleEnum } from './hair-style.enum';

const hairStyleValues = [
  HairStyleEnum.Afro,
  HairStyleEnum.Asymmetrical,
  HairStyleEnum.Braids,
  HairStyleEnum.BuzzCut,
  HairStyleEnum.Dreadlocks,
  HairStyleEnum.Long,
  HairStyleEnum.Ponytail,
  HairStyleEnum.Short,
];

test('should generate random HairStyleEnum', () => {
  expect(hairStyleValues).toContain(getRandomHairStyle());
});
