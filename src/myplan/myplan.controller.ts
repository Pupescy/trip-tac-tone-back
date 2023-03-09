import { Body, Controller,Get, Post, Delete, Param } from '@nestjs/common';
import { ICafe } from 'src/models/data/cafe.model';
import { IPlan } from 'src/models/data/myplan.model';
import { MyplanService } from './myplan.service';

@Controller('myplan')
export class MyplanController {
    constructor(private _MyplanService:MyplanService){}

    @Get(':userId')
    async getByuserId(@Param() param){
        return await this._MyplanService.getByuserId(param.userId)
    }

    @Post()
    async create(@Body() payload:IPlan){
        try {
            await this._MyplanService.create(payload);
            return "Successful!"
        } catch (error) {
            return error
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string){
        await this._MyplanService.remove(id)
        return `This action removes a #${id} plan`;
    }

}
