import { Module } from '@nestjs/common';
import { CafesRepository } from 'src/repositories/cafe.repository';
import { CafeController } from './cafe.controller';
import { CafeService } from './cafe.service';

@Module({
    controllers: [CafeController],
    providers: [CafeService, CafesRepository],
    exports: [CafeService]
})
export class CafeModule {
    constructor(private CafeService: CafeService) {}
}
