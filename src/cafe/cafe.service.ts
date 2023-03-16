import { Injectable } from '@nestjs/common';
import { ICafe, ITonesStyle } from 'src/models/data/cafe.model';
import { CafesRepository } from 'src/repositories/cafe.repository';

@Injectable()
export class CafeService {
    constructor(private cafeRepository: CafesRepository){}

    async getAll(getAllDetails: boolean = false){
        return await this.cafeRepository.getAll(getAllDetails)
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

    async getCafeFromStyleFilter(style: string){
        return await this.cafeRepository.getCafeFromStyleFilter(style)
    }

    async getTone(tone: string){
        return await this.cafeRepository.getTone(tone)
    }

    async remove(id: string){
        await this.cafeRepository.remove(id)
    }

    async update(id:string, data: any){
        await this.cafeRepository.update(id, data)
    }

    async upload(cafe_pics:string, data:any){
        await this.cafeRepository.upload(cafe_pics,data)
    }
}
