import { Injectable } from '@nestjs/common';
import { myplansCollection } from "src/config/firebase";


@Injectable()

export class MyplansRepository {
    async getAll() {
        const res = await myplansCollection.get();

        if (res.empty) return []
        else {
            return res.docs.map(doc => {
                const data=doc.data()
                return { 
                    id: doc.id,
                    Plan_Name: data.Plan_name,
                    Date: data.Date,
                    
                }
            })
        }
    }

}