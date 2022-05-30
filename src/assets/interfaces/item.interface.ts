import { ElementEnum } from '../enums/element.enum';
import { TipMaterialEnum } from '../enums/tip-material.enum';
import { Color } from '../lib/color-utils';

export interface IItem {
  tipMaterial: TipMaterialEnum;
  element: ElementEnum;
  shaftColor: Color;
  range: number;
  damage: number;
}
