import { Injectable } from '@nestjs/common';
import { ICafe, ITonesStyle } from 'src/models/data/cafe.model';
import { CafesRepository } from 'src/repositories/cafe.repository';

@Injectable()
export class CafeService {
    constructor(private cafeRepository: CafesRepository){}

    async getAll(){
        return await this.cafeRepository.getAll()
    } 

    async getById(id: string){
        return await this.cafeRepository.getById(id)
    }

    async getByName(name: string){
        return await this.cafeRepository.getByName(name)
    }

    async create(data: ICafe){
        await this.cafeRepository.create(data)

    }

    async getCafeFromTonesAndStyle(data: ITonesStyle){
        return await this.cafeRepository.getCafeFromTonesAndStyle(data)
    }
}
