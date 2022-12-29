import { Injectable } from '@nestjs/common';
import { db } from "src/config/firebase";
// const cafesCollection = db.collection('Cafes');


@Injectable()

export class CafesRepository {
    private cafesCollection = db.collection('Cafes');
    async getAll() {
        const col = await this.cafesCollection.get();

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

