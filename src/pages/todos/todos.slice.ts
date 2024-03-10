import { createSlice } from "@reduxjs/toolkit";
import { TodosList } from "./todos.interface";


interface InitialState {
    todosLoading : boolean;
    todosData : TodosList;
}

export const initialState: InitialState = {
    todosLoading : true,
    todosData : {
        data : []
    }
}

const TodosSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        
    }
});