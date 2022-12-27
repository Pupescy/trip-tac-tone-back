import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return "Hello1";
  }

  @Get('/hello2')
  getHello2(): string {
    return "Hello2";
  }
}
