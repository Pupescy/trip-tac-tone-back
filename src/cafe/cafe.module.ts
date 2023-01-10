import { Module } from '@nestjs/common';
import { CafesRepository } from 'src/repositories/cafe.repository';
import { RepositoriesModule } from 'src/repositories/repositories.module';
import { CafeController } from './cafe.controller';
import { CafeService } from './cafe.service';

@Module({
    imports:[RepositoriesModule],
    controllers: [CafeController],
    providers: [CafeService, CafesRepository],
    exports: [CafeService]                                                                                                                 
})
export class CafeModule {
    constructor(private CafeService: CafeService) {}
}
