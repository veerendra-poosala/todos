
export interface RatingType{
    rate : number;
    count : number
}

export interface Product{
    id: number;
    title: string;
    price: number ;
    description: string;
    category : string;
    image : string;
    rating: RatingType;
}

export interface Products{
    data : Product[]
}
