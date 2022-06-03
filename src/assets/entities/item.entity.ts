import { getRandomTipMaterial, TipMaterialEnum } from '../enums/tip-material.enum';
import { ElementEnum, getRandomElement } from '../enums/element.enum';
import { Color, ColorUtils } from '../lib/color-utils';
import { getRandomItemType, ItemTypeEnum } from '../enums/item-type.enum';
import { IItem } from '../interfaces/item.interface';
import { NumberUtils } from '../lib/number-utils';

export class ItemEntity {
  private readonly _itemType: ItemTypeEnum;
  private readonly _tipMaterial: TipMaterialEnum;
  private readonly _element: ElementEnum;
  private readonly _shaftColor: Color;
  private readonly _range: number;
  private readonly _damage: number;

  constructor();
  constructor(item: IItem & { type: ItemTypeEnum });
  constructor(item?: IItem & { type: ItemTypeEnum }) {
    this._itemType = item?.type || getRandomItemType();
    this._tipMaterial = item?.tipMaterial || getRandomTipMaterial();
    this._element = item?.element || getRandomElement();
    this._shaftColor = item?.shaftColor || ColorUtils.randomHex();
    this._range = item?.range || NumberUtils.getRandomFloat(50, 100);
    this._damage = item?.damage || NumberUtils.getRandomFloat(50, 100);
  }

  get itemType(): string {
    return `${this._itemType}`;
  }

  get schemaValues(): IItem {
    return {
      tipMaterial: this._tipMaterial,
      element: this._element,
      shaftColor: this._shaftColor,
      range: this._range,
      damage: this._damage,
    };
  }

  toString(): string {
    return `Tip:${this._tipMaterial},Element:${this._element},ShaftColor:${this._shaftColor},Range:${this._range},Damage:${this._damage}`;
  }
}
