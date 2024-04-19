import { Injectable } from '@nestjs/common';
import { CreateAuthorizingDto } from './dto/create-authorizing.dto';
import { UpdateAuthorizingDto } from './dto/update-authorizing.dto';

@Injectable()
export class AuthorizingService {
  create(createAuthorizingDto: CreateAuthorizingDto) {
    return 'This action adds a new authorizing';
  }

  findAll() {
    return `This action returns all authorizing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authorizing`;
  }

  update(id: number, updateAuthorizingDto: UpdateAuthorizingDto) {
    return `This action updates a #${id} authorizing`;
  }

  remove(id: number) {
    return `This action removes a #${id} authorizing`;
  }
}
