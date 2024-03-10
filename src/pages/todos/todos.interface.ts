

export interface TodoItem{
    id : string | number;
    title : string ;
    updated : number ;
}

export interface TodosList{
    data : TodoItem[]
}