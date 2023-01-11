import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CafeService } from './cafe.service';


@Controller('cafe')
export class CafeController {
    constructor(private _cafeService: CafeService){}

    @Get()
    async getAll() {
        return await this._cafeService.getAll()
    }

    @Get(':id')
    async findOne(@Param() param) {
        return await this._cafeService.getById(param.id)
    }

    // @Post()
    // create(@Body() createUserDto: CreateUserDto){
    //     return this.usersService.create(createUserDto);
    // }
}
