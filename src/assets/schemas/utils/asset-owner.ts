import { Prop } from '@nestjs/mongoose';

export class AssetOwner {
  @Prop({
    required: true,
    index: true,
  })
  owner: string;

  @Prop({
    required: true,
    validate: (val: string[]) => val.length > 0,
  })
  owners: string[];
}
