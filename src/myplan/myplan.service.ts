import { Injectable } from '@nestjs/common';
import { MyplansRepository } from 'src/repositories/myplan.repository';

@Injectable()
export class MyplanService {
    constructor(private myplanRepository: MyplansRepository){}

    async getAll(){
        return this.myplanRepository.getAll()
    }
}
