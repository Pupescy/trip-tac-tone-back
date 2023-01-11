import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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

    // @Post()
    // create(@Body() createUserDto: CreateUserDto){
    //     return this.usersService.create(createUserDto);
    // }
}
