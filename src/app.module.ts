import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CafeModule } from './cafe/cafe.module';


@Module({
  imports: [TodoModule, CafeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
