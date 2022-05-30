import { Prop } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

export class AssetOwner {
  @Prop({
    required: true,
    index: true,
    type: SchemaTypes.ObjectId,
  })
  owner: Types.ObjectId;

  @Prop({
    required: true,
    type: [SchemaTypes.ObjectId],
    validate: (val: Types.ObjectId[]) => val.length > 0,
  })
  owners: Types.ObjectId[];
}
