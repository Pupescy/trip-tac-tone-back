import { Module } from '@nestjs/common';
import { CafesRepository } from './cafe.repository';

@Module({
    providers: [CafesRepository],
    exports: [CafesRepository] 
})
export class RepositoriesModule {
    constructor(private CafesRepositories: CafesRepository) {}
}
