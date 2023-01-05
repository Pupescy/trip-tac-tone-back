import { Injectable } from '@nestjs/common';
import { db } from "src/config/firebase";

@Injectable()

export class MyplansRepository {
    private myplansCollection = db.collection('MyPlan');
    async getAll() {
        const col = await this.myplansCollection.get();

        if (col.empty) return []
        else {
            return col.docs.map(doc => {
                const data=doc.data()
                return { id: doc.id, ...data }
            })
        }
    }

    async getById(id: string) {

    }

    async getByName(name: string) {

    }
}