import { getRandomBodyMuscles, BodyMusclesEnum } from './body-muscles.enum';

const bodyMuscleValues = [BodyMusclesEnum.Wimp, BodyMusclesEnum.Muscular];

test('should generate random BodyMusclesEnum', () => {
  expect(bodyMuscleValues).toContain(getRandomBodyMuscles());
});
