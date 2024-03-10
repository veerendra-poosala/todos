import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoItem, TodosList } from "./todos.interface";


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
        todosLoading : (state)=>{
            state.todosLoading = false;
        },

        onFetchTodos : ((state,action : PayloadAction<TodosList>)=>{
            state.todosData = action.payload
        }),

        onCreateTodos : ((state, action : PayloadAction<TodoItem>)=>{
            state.todosData.data?.push(action.payload);
        }),

        onUpdateTodos : ((state, action : PayloadAction<TodoItem>)=>{
            const index = state.todosData.data?.findIndex(item=>item.id === action.payload.id);
            if(!!index){
                state.todosData.data[index] = {
                    ...action.payload,
                    updated: (state.todosData.data[index].updated || 0) + 1
                };
            }
            
        }),

        onDeleteTodos : ((state, action : PayloadAction<TodoItem>)=>{
            const index = state.todosData.data?.findIndex(item=>item.id === action.payload.id);
            if(index !== -1){
                state.todosData.data?.splice(index,1);
            }
        }),
    }
});



export const {
                todosLoading,
                onFetchTodos,
                onCreateTodos,
                onDeleteTodos,
                onUpdateTodos
            } = TodosSlice.actions

export const TodosReducer = TodosSlice.reducer;