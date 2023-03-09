import { Injectable } from '@nestjs/common';
import { myplansCollection } from "src/config/firebase";
import { IPlan } from 'src/models/data/myplan.model';


@Injectable()

export class MyplansRepository {
    async getByuserId(userId: string) {
        const res = await myplansCollection.where('userId', '==', userId ).get();

        if (res.empty) return []
        else {
            return res.docs.map(doc => {
                const data=doc.data()
                return { 
                    id: doc.id,
                    Plan_Name: data.Plan_name,
                    Date: data.Date,
                    userId: data.userId
                    
                }
            })
        }
    }

    async create (data: IPlan){
        const id = myplansCollection.doc().id
        const newDoc= {
            Plan_ID: id,
            Plan_name: data.name,
            User_Tone: data.tones,
            UserStyle: data.style,
            Date: data.date,
            Duration: data.duration,
            userId: data.userId
        }
        await myplansCollection.doc(id).set(newDoc)
        console.log(`create success: ${id}`)
    }

    async remove(id: string){
        await myplansCollection.doc(id).delete();
    }

}