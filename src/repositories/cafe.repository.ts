import { Injectable } from '@nestjs/common';
import { db } from "src/config/firebase";
const cafesCollection = db.collection('Cafes');

@Injectable()
export class CafesRepository {
    async getAll() {
        const col = await cafesCollection.get();

        if (col.empty) return []
        else {
            return col.docs.map(doc => {
                return { id: doc.id, ...doc }
            })
        }
    }

    async getById(id: string) {

    }

    async getByName(name: string) {

    }
}