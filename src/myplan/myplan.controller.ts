import { Body, Controller,Get, Post } from '@nestjs/common';
import { ICafe } from 'src/models/data/cafe.model';
import { IPlan } from 'src/models/data/myplan.model';
import { MyplanService } from './myplan.service';

@Controller('myplan')
export class MyplanController {
    constructor(private _MyplanService:MyplanService){}

    @Get()
    async getAll(){
        return await this._MyplanService.getAll()
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

   

}
