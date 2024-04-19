import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorizingService } from './authorizing.service';
import { CreateAuthorizingDto } from './dto/create-authorizing.dto';
import { UpdateAuthorizingDto } from './dto/update-authorizing.dto';

@Controller('authorizing')
export class AuthorizingController {
  constructor(private readonly authorizingService: AuthorizingService) {}

  @Post()
  create(@Body() createAuthorizingDto: CreateAuthorizingDto) {
    return this.authorizingService.create(createAuthorizingDto);
  }

  @Get()
  findAll() {
    return this.authorizingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorizingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorizingDto: UpdateAuthorizingDto) {
    return this.authorizingService.update(+id, updateAuthorizingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorizingService.remove(+id);
  }
}
