import { PartialType } from '@nestjs/mapped-types';
import { CreateTranzactionDto } from './create-tranzaction.dto';

export class UpdateTranzactionDto extends PartialType(CreateTranzactionDto) {}
