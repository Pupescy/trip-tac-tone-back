import { Module } from '@nestjs/common';
import { MyplansRepository } from 'src/repositories/myplan.repository';
import { RepositoriesModule } from 'src/repositories/repositories.module';
import { MyplanController } from './myplan.controller';
import { MyplanService } from './myplan.service';

@Module({
  imports:[RepositoriesModule],
  controllers:[MyplanController],
  providers: [MyplanService,MyplansRepository],
  exports:[MyplanService]
})
export class MyplanModule {
  constructor(private MyplanService: MyplanService){}
}
