import { Injectable } from '@nestjs/common';
import { CreateTranzactionDto } from './dto/create-tranzaction.dto';
import { UpdateTranzactionDto } from './dto/update-tranzaction.dto';

@Injectable()
export class TranzactionService {
  create(createTranzactionDto: CreateTranzactionDto) {
    return 'This action adds a new tranzaction';
  }

  findAll() {
    return `This action returns all tranzaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tranzaction`;
  }

  update(id: number, updateTranzactionDto: UpdateTranzactionDto) {
    return `This action updates a #${id} tranzaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} tranzaction`;
  }
}
