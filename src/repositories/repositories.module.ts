import { Module } from '@nestjs/common';
import { CafesRepository } from './cafe.repository';
import { MyplansRepository } from './myplan.repository';

@Module({
    providers: [CafesRepository,MyplansRepository],
    exports: [CafesRepository,MyplansRepository] 
})
export class RepositoriesModule {
    // constructor(private CafesRepositories: CafesRepository) {}
    // constructor(private MyplanRepositories: MyplansRepository){}
}
