import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ICafe, ITonesStyle } from 'src/models/data/cafe.model';
import { CafeService } from './cafe.service';


@Controller('cafe')
export class CafeController {
    constructor(private _cafeService: CafeService){}

    @Get()
    async get() {
        return await this._cafeService.getAll()
    }

    @Get(':id')
    async getById(@Param() param) {
        return await this._cafeService.getById(param.id)
    }

    @Get('name/:name')
    async getByName(@Param() param) {
        return await this._cafeService.getByName(param.name)
      }

    @Post()
    async create(@Body() payload:ICafe){ 
        try {
            await this._cafeService.create(payload);
            return "Successful!"
        } catch (error) {
            return error
        }
    }

    @Post('/getCafeFromTonesAndStyle')
    async getCafeFromTonesAndStyle(@Body() paylaod:ITonesStyle){
        return await this._cafeService.getCafeFromTonesAndStyle(paylaod)
    }
}
