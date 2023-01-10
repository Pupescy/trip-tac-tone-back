import { Controller, Get } from '@nestjs/common';
import { CafeService } from './cafe.service';


@Controller('cafe')
export class CafeController {
    constructor(private _cafeService: CafeService){}

    @Get()
    async getAll() {
        return await this._cafeService.getAll()
    }
}
