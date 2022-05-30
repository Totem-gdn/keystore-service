import { getRandomTipMaterial, TipMaterialEnum } from './tip-material.enum';

const tipMaterialValues = [TipMaterialEnum.Wood, TipMaterialEnum.Bone, TipMaterialEnum.Flint, TipMaterialEnum.Obsidian];

test('should generate random TipMaterialEnum', () => {
  expect(tipMaterialValues).toContain(getRandomTipMaterial());
});
