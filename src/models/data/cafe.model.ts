export interface ICafe {
    id?: string;
    name: string;
    detail: string;
    address: string;
    tone: string[];
    style: string;
    photogenic_time: number;
    color: Array<string>;
    cafe_pics: string[];
    openclose: Array<IOpenClose>;
}

export interface IOpenClose {
    open: string;
    day: string;
    close: string;
}

export interface ITonesStyle{
    tones?: string[];
    style?: string;
}