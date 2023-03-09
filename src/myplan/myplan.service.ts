import { Injectable } from '@nestjs/common';
import { IPlan } from 'src/models/data/myplan.model';
import { MyplansRepository } from 'src/repositories/myplan.repository';

@Injectable()
export class MyplanService {
    constructor(private myplanRepository: MyplansRepository){}

    async getAll(){
        return this.myplanRepository.getAll()
    }

    async create(data: IPlan){
        await this.myplanRepository.create(data);
    }

    async remove(id: string){
        await this.myplanRepository.remove(id)
    }
}
