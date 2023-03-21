import { Injectable } from '@nestjs/common';
import { cafesCollection } from 'src/config/firebase';
import { ITonesStyle } from 'src/models/data/cafe.model';
import { IPlan } from 'src/models/data/myplan.model';
import { CafesRepository } from 'src/repositories/cafe.repository';
import { MyplansRepository } from 'src/repositories/myplan.repository';


@Injectable()
export class MyplanService {
    constructor(private myplanRepository: MyplansRepository, private cafeRepository: CafesRepository) { }

    async getByuserId(userId: string) {
        return this.myplanRepository.getByuserId(userId)
    }

    async create(data: IPlan) {
        return await this.myplanRepository.create(data);
    }

    async remove(id: string) {
        await this.myplanRepository.remove(id)
    }

    async getSuggestPlan(id: string) {
        const cafeTime = await this.cafeRepository.getCafeFromTonesAndStyle
        const plan = await this.myplanRepository.getSuggestPlan(id)
        const timeNum = []; //0: start, 1: end
        const photoTime = []
        for (const duration of plan.Duration) {
            const splitedTime = (duration as string).split(':')
            const time = Number(splitedTime[0]) + (Number(splitedTime[1]) * 5 / 300) // hour + minute
            timeNum.push(time)
        }

        if((timeNum[0]<8.00 && timeNum[1]>8.00)|| (timeNum[0] >= 8.00 && timeNum[0] < 10.00)) { photoTime.push(1) }
        // if (timeNum[0] >= 8.00 && timeNum[0] < 10.00) { photoTime.push(1) }
        if (timeNum[0] < 14.00 && timeNum[1] > 11.00) { photoTime.push(2) }
        if (timeNum[0] < 17.00 && timeNum[1] > 15.00) { photoTime.push(3) }

        let result= [];
        for (const time of photoTime) {
            const filter: ITonesStyle = {
                style: plan.UserStyle,
                tones: plan.User_Tone,
                photogenic_time: time
            }

        
            const cafe = await this.cafeRepository.getCafeFromTonesAndStyle(filter)
            result = [... result, ... cafe]
        }

        return {cafe:result,plan}
    }


}
