import { Module } from '@nestjs/common';
import { KeysController } from './keys.controller';
import { KeysService } from './keys.service';

@Module({
  providers: [KeysService],
  controllers: [KeysController],
})
export class KeysModule {}
