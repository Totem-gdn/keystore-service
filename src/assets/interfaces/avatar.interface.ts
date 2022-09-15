import { SexEnum } from '../enums/sex.enum';
import { Color } from '../lib/color-utils';
import { HairStyleEnum } from '../enums/hair-style.enum';
import { BodyFatEnum } from '../enums/body-fat.enum';
import { BodyMusclesEnum } from '../enums/body-muscles.enum';

export interface IAvatar {
  sex: SexEnum;
  skinColor: Color;
  hairColor: Color;
  hairStyle: HairStyleEnum;
  eyeColor: Color;
  bodyFat: BodyFatEnum;
  bodyMuscles: BodyMusclesEnum;
  clothingColor: Color;
}
