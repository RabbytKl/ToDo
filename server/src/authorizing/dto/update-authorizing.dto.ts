import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorizingDto } from './create-authorizing.dto';

export class UpdateAuthorizingDto extends PartialType(CreateAuthorizingDto) {}
