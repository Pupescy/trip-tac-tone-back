import { Injectable, UploadedFile } from '@nestjs/common';
import { cafesCollection } from "src/config/firebase";
import { ICafe, ITonesStyle } from 'src/models/data/cafe.model';
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "src/config/firebase";


@Injectable()
export class CafesRepository {
    private _mapGetCardDetails(doc: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>) {
        const data = doc.data()
        return {
            id: doc.id,
            Cafe_Name: data.Cafe_Name,
            Cafe_Pic: data.Cafe_Pics[0],
            Address: data.Address,
            Tones: data.Tone,
            Style: data.Style
        }
    }

    private _mapGetAllDetails(doc: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>) {
        const data = doc.data()
        return {
            id: doc.id,
            ...data
        }
    }

    async getAll(getAllDetails: boolean = false) {
        const res = await cafesCollection.get();

        if (res.empty) return []
        else {
            return res.docs.map(doc => {
                return getAllDetails ? this._mapGetAllDetails(doc) : this._mapGetCardDetails(doc)
            }) as any[]
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

    

    async create(data: ICafe) {
        const id = cafesCollection.doc().id
        let newDoc = {
            Cafe_ID: id,
            Cafe_Name: data.name,
            Cafe_Pics: data.cafe_pics,
            Address: data.address,
            Detail: data.detail,
            Tone: data.tone,
            Style: data.style,
            Photogenic_Time: data.photogenic_time,
            Color: data.color,
            openClose: data.openclose
        }

        // const converted = []
        // for(const timeInfo of newDoc.openClose){
        //     for(const days of timeInfo.day){
        //         const _d = {
        //             open: timeInfo.open,
        //             close: timeInfo.close,
        //             day: days
        //         }
        //         converted.push(_d)
        //     }

        //     console.log(converted)
        // }

        // newDoc.openClose = converted

        await cafesCollection.doc(id).set(newDoc)
        console.log(`create success: ${id}`)
    }

    async getCafeFromTonesAndStyle(data: ITonesStyle) {
        let cafesCol: any = cafesCollection
        if (data.style) {
            cafesCol = cafesCol.where("Style", '==', data.style)
        }
        if (data.photogenic_time > 0) {
            cafesCol = cafesCol.where("Photogenic_Time", '==', data.photogenic_time)
        }
        const res = await cafesCol.get()
        let result = res.docs.map(doc => {
            const data = doc.data()
            return {
                id: doc.id,
                Cafe_Name: data.Cafe_Name,
                Cafe_Pic: data.Cafe_Pics,
                Address: data.Address,
                Style: data.Style,
                Tone: data.Tone,
                photogenic_time:data.Photogenic_Time,
                Detail:data.Detail,
                openClose:data.openClose,
                Color:data.Color
            }
        })
        if (data.tones && data.tones.length) {
            result = result.filter((el) => {
                const tones = el?.Tone || []
                for (const tone of tones) {
                    if (data.tones.includes(tone)) return true
                }
                return false
            })
        }
        
        return result
    }

    async getCafeFromStyleFilter(style: string) {
        const res = await cafesCollection.where('Style', '==', style).get();

        if (res.empty) return []
        else {
            return res.docs.map(doc => {
                const data = doc.data()
                return {
                    id: doc.id,
                    Cafe_Name: data.Cafe_Name,
                    Cafe_Pic: data.Cafe_Pics[0],
                    Address: data.Address,
                    Style:data.Style,
                    Tone:data.Tone,
                    Photogenic_Time:data.Photogenic_Time,
                    Detail:data.Detail,
                    Color:data.Color,
                    openClose:data.openClose
                }
            })
        }
    }
    async getTone(tone: string){
       const cafes = await this.getAll()
       return cafes.filter(e => e.Tones?.includes(tone))
    }

    async remove(id: string){
        await cafesCollection.doc(id).delete();
    }

    async update(id: string, data: any){
        await cafesCollection.doc(id).update(data)
    }

   
    
}

