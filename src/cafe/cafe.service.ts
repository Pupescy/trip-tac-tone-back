import { Injectable } from '@nestjs/common';
import { CafesRepository } from 'src/repositories/cafe.repository';

@Injectable()
export class CafeService {
    constructor(private cafeRepository: CafesRepository){}

    async getAll(){
        return 12//this._cafeService.getAll()
    }
}
