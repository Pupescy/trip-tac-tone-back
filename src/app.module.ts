import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CafeModule } from './cafe/cafe.module';
import { CafeController } from './cafe/cafe.controller';
import { CafeService } from './cafe/cafe.service';
import { CafesRepository } from './repositories/cafe.repository';
import { RepositoriesModule } from './repositories/repositories.module';
import { MyplanController } from './myplan/myplan.controller';
import { MyplanModule } from './myplan/myplan.module';


@Module({
  imports: [TodoModule, CafeModule,RepositoriesModule, MyplanModule],
  controllers: [AppController,CafeController, MyplanController],
  providers: [AppService,CafeService],
})
export class AppModule { }
