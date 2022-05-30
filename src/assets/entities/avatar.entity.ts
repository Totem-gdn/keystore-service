import { getRandomHairStyle, HairStyleEnum } from '../enums/hair-style.enum';
import { getRandomSex, SexEnum } from '../enums/sex.enum';
import { BodyFatEnum, getRandomBodyFat } from '../enums/body-fat.enum';
import { BodyMusclesEnum, getRandomBodyMuscles } from '../enums/body-muscles.enum';
import { Color, ColorUtils } from '../lib/color-utils';
import { IAvatar } from '../interfaces/avatar.interface';

export class AvatarEntity {
  private _sex: SexEnum;
  private _skinColor: Color;
  private _hairColor: Color;
  private _hairStyle: HairStyleEnum;
  private _eyeColor: Color;
  private _bodyFat: BodyFatEnum;
  private _bodyMuscles: BodyMusclesEnum;

  constructor();
  constructor(avatar: IAvatar);
  constructor(avatar?: IAvatar) {
    this._sex = avatar?.sex || getRandomSex();
    this._skinColor = avatar?.skinColor || ColorUtils.randomHex();
    this._hairColor = avatar?.hairColor || ColorUtils.randomHex();
    this._hairStyle = avatar?.hairStyle || getRandomHairStyle();
    this._eyeColor = avatar?.eyeColor || ColorUtils.randomHex();
    this._bodyFat = avatar?.bodyFat || getRandomBodyFat();
    this._bodyMuscles = avatar?.bodyMuscles || getRandomBodyMuscles();
  }

  set sex(value: SexEnum) {
    this._sex = value;
  }

  set skinColor(value: Color) {
    this._skinColor = value;
  }

  set hairColor(value: Color) {
    this._hairColor = value;
  }

  set hairStyle(value: HairStyleEnum) {
    this._hairStyle = value;
  }

  set eyeColor(value: Color) {
    this._eyeColor = value;
  }

  set bodyFat(value: BodyFatEnum) {
    this._bodyFat = value;
  }

  set bodyMuscles(value: BodyMusclesEnum) {
    this._bodyMuscles = value;
  }

  toString(): string {
    return `Sex:${this._sex},SkinColor:${this._skinColor},HairColor:${this._hairColor},HairStyle:${this._hairStyle},EyeColor:${this._eyeColor},BodyFat:${this._bodyFat},BodyMuscles:${this._bodyMuscles}`;
  }
}
