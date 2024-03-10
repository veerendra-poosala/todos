

export interface TodoItem{
    id : string | number;
    title : string ;
    updated : number ;
    count : number;
}

export interface TodosList{
    data : TodoItem[]
}