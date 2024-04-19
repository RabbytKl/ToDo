import { Module } from '@nestjs/common';
import { AuthorizingService } from './authorizing.service';
import { AuthorizingController } from './authorizing.controller';

@Module({
  controllers: [AuthorizingController],
  providers: [AuthorizingService],
})
export class AuthorizingModule {}
