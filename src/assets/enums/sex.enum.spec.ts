import { getRandomSex, SexEnum } from './sex.enum';

const sexValues = [SexEnum.Male, SexEnum.Female];

test('should generate random SexEnum', () => {
  expect(sexValues).toContain(getRandomSex());
});
