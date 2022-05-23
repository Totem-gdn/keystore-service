import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Provider = {
  id: string;
  provider: string;
  username: string;
};

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  privateKey: string;

  @Prop({
    required: true,
    validate(val: Provider[]) {
      return val.length > 0;
    },
  })
  auth: Provider[];

  @Prop({
    required: true,
    immutable: true,
    default: Date.now(),
  })
  created: Date;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
