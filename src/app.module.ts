import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CafeModule } from './cafe/cafe.module';
import { CafeController } from './cafe/cafe.controller';
import { CafeService } from './cafe/cafe.service';
import { RepositoriesModule } from './repositories/repositories.module';
import { MyplanController } from './myplan/myplan.controller';
import { MyplanModule } from './myplan/myplan.module';


@Module({
  imports: [CafeModule,RepositoriesModule, MyplanModule],
  controllers: [AppController,CafeController, MyplanController],
  providers: [AppService,CafeService],
})
export class AppModule { }
