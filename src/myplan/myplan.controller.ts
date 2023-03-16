import { Body, Controller,Get, Post, Delete, Param, Query } from '@nestjs/common';
import { IPlan } from 'src/models/data/myplan.model';
import { MyplanService } from './myplan.service';

@Controller('myplan')
export class MyplanController {
    constructor(private _MyplanService:MyplanService){}

    @Get('id/:id')
    async  getSuggestPlan(@Param('id') id: string){
        return await this._MyplanService. getSuggestPlan(id)
    }

    @Get(':userId')
    async getByuserId(@Param() param){
        return await this._MyplanService.getByuserId(param.userId)
    }

    @Post()
    async create(@Body() payload:IPlan){
        try {
            const id=await this._MyplanService.create(payload);
            return {
                data: id,
                message: "Successful!"
            }
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
