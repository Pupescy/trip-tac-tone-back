import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ICafe, ITonesStyle } from 'src/models/data/cafe.model';
import { CafeService } from './cafe.service';


@Controller('cafe')
export class CafeController {
    constructor(private _cafeService: CafeService) { }

    @Get()
    async get(@Query() query) {
        const getAllDetails = Boolean(query.allDetails)
        // console.log('getAllDetails', getAllDetails)
        return await this._cafeService.getAll(getAllDetails)
    }

    @Get(':id')
    async getById(@Param() param) {
        return await this._cafeService.getById(param.id)
    }

    @Get('name/:name')
    async getByName(@Param() param) {
        return await this._cafeService.getByName(param.name)
    }

    @Get('tone/:tone')
    async getTone(@Param() param){
        return await this._cafeService.getTone(param.tone)
    }

    @Post()
    async create(@Body() payload: ICafe) {
        try {
            await this._cafeService.create(payload);
            return "Successful!"
        } catch (error) {
            return error
        }
    }

    @Post('/getCafeFromTonesAndStyle')
    async getCafeFromTonesAndStyle(@Body() paylaod: ITonesStyle) {
        return await this._cafeService.getCafeFromTonesAndStyle(paylaod)
    }

    @Get('style/:style')
    async getCafeFromStyleFilter(@Param() param) {
        return await this._cafeService.getCafeFromStyleFilter(param.style)
    }

    @Delete(':id')
    async remove(@Param('id') id: string){
        // return `This action removes a #${id} cafe`;
        try {
            
        } catch (error) {
            return error;
        }
    }


}
