import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} //присвоюємо собі AppService

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
