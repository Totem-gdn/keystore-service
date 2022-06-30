import { SexEnum } from '../../enums/sex.enum';
import { HairStyleEnum } from '../../enums/hair-style.enum';
import { BodyFatEnum } from '../../enums/body-fat.enum';
import { BodyMusclesEnum } from '../../enums/body-muscles.enum';
import { AvatarEntity } from '../avatar.entity';

export const avatars = [
  new AvatarEntity({
    sex: SexEnum.Female,
    skinColor: '#472422',
    hairColor: '#b1b1b1',
    hairStyle: HairStyleEnum.Dreadlocks,
    eyeColor: '#b5d6e0',
    bodyFat: BodyFatEnum.Thin,
    bodyMuscles: BodyMusclesEnum.Wimp,
  }),
  new AvatarEntity({
    sex: SexEnum.Male,
    skinColor: '#f9d4ab',
    hairColor: '#341c0d',
    hairStyle: HairStyleEnum.BuzzCut,
    eyeColor: '#7c8b4f',
    bodyFat: BodyFatEnum.Fat,
    bodyMuscles: BodyMusclesEnum.Muscular,
  }),
  new AvatarEntity({
    sex: SexEnum.Male,
    skinColor: '#81574b',
    hairColor: '#e4b877',
    hairStyle: HairStyleEnum.Asymmetrical,
    eyeColor: '#c4a05f',
    bodyFat: BodyFatEnum.Thin,
    bodyMuscles: BodyMusclesEnum.Muscular,
  }),
  new AvatarEntity({
    sex: SexEnum.Female,
    skinColor: '#efd2c4',
    hairColor: '#914329',
    hairStyle: HairStyleEnum.Braids,
    eyeColor: '#90b4ca',
    bodyFat: BodyFatEnum.Thin,
    bodyMuscles: BodyMusclesEnum.Muscular,
  }),
  new AvatarEntity({
    sex: SexEnum.Female,
    skinColor: '#c58351',
    hairColor: '#070504',
    hairStyle: HairStyleEnum.Ponytail,
    eyeColor: '#a97e33',
    bodyFat: BodyFatEnum.Fat,
    bodyMuscles: BodyMusclesEnum.Wimp,
  }),
  new AvatarEntity({
    sex: SexEnum.Male,
    skinColor: '#7a3e10',
    hairColor: '#cd622b',
    hairStyle: HairStyleEnum.Afro,
    eyeColor: '#a7ad7f',
    bodyFat: BodyFatEnum.Fat,
    bodyMuscles: BodyMusclesEnum.Wimp,
  }),
  new AvatarEntity({
    sex: SexEnum.Female,
    skinColor: '#8a6743',
    hairColor: '#62422e',
    hairStyle: HairStyleEnum.Long,
    eyeColor: '#3d0d04',
    bodyFat: BodyFatEnum.Fat,
    bodyMuscles: BodyMusclesEnum.Muscular,
  }),
  new AvatarEntity({
    sex: SexEnum.Male,
    skinColor: '#dca788',
    hairColor: '#ad7b41',
    hairStyle: HairStyleEnum.Short,
    eyeColor: '#7a3411',
    bodyFat: BodyFatEnum.Thin,
    bodyMuscles: BodyMusclesEnum.Wimp,
  }),
];
