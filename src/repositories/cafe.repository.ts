import { Injectable } from '@nestjs/common';
import { cafesCollection } from "src/config/firebase";

@Injectable()
export class CafesRepository {
    async getAll() {
        const res = await cafesCollection.get();

        if (res.empty) return []
        else {
            return res.docs.map(doc => {
                const data = doc.data()
                return {
                    id: doc.id,
                    Cafe_Name: data.Cafe_Name,
                    Cafe_Pic: data.Cafe_Pics[0],
                    Address: data.Address
                }
            })
        }
    }

    async getById(id: string) {
        const res = await cafesCollection.doc(id).get();

        if (!res.exists) return null
        else {
            return {
                id: res.id,
                ...res.data()
            }
        }
    }

    async getByName(name: string) {
        const res = await cafesCollection.where('Cafe_Name', '==', name).get();

        if (res.empty) return []
        else {
            return res.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
        }
    }
}

