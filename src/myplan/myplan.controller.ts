import { Controller,Get } from '@nestjs/common';
import { MyplanService } from './myplan.service';

@Controller('myplan')
export class MyplanController {
    constructor(private _MyplanService:MyplanService){}

    @Get()
    async getAll(){
        return await this._MyplanService.getAll()
    }
}
