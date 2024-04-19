import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TranzactionService } from './tranzaction.service';
import { CreateTranzactionDto } from './dto/create-tranzaction.dto';
import { UpdateTranzactionDto } from './dto/update-tranzaction.dto';

@Controller('tranzaction')
export class TranzactionController {
  constructor(private readonly tranzactionService: TranzactionService) {}

  @Post()
  create(@Body() createTranzactionDto: CreateTranzactionDto) {
    return this.tranzactionService.create(createTranzactionDto);
  }

  @Get()
  findAll() {
    return this.tranzactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tranzactionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTranzactionDto: UpdateTranzactionDto) {
    return this.tranzactionService.update(+id, updateTranzactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tranzactionService.remove(+id);
  }
}
