import { BodyFatEnum, getRandomBodyFat } from './body-fat.enum';

const bodyFatValues = [BodyFatEnum.Thin, BodyFatEnum.Fat];

test('should generate random BodyFatEnum', () => {
  expect(bodyFatValues).toContain(getRandomBodyFat());
});
