import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CafeModule } from './cafe/cafe.module';
import { CafeController } from './cafe/cafe.controller';
import { CafeService } from './cafe/cafe.service';
import { CafesRepository } from './repositories/cafe.repository';
import { RepositoriesModule } from './repositories/repositories.module';


@Module({
  imports: [TodoModule, CafeModule,RepositoriesModule],
  controllers: [AppController,CafeController],
  providers: [AppService,CafeService],
})
export class AppModule { }
