import { Module } from '@nestjs/common';
import { MyplanService } from './myplan.service';

@Module({
  providers: [MyplanService]
})
export class MyplanModule {}
