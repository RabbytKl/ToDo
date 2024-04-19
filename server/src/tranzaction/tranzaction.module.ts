import { Module } from '@nestjs/common';
import { TranzactionService } from './tranzaction.service';
import { TranzactionController } from './tranzaction.controller';

@Module({
  controllers: [TranzactionController],
  providers: [TranzactionService],
})
export class TranzactionModule {}
