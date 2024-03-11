import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Products } from "./products.interface";


interface InitialState {
    productsLoading : boolean;
    products : Products;
}

const initialState:InitialState = {
    productsLoading : true,
    products : {
        data : []
     }
}

const ProductsSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
        productsLoading : (state)=>{
            state.productsLoading = false;
        },
        onFetchProducts : (state, action: PayloadAction<Products>)=>{
            state.products = action.payload
        }

    }
});

export const ProductsReducer = ProductsSlice.reducer;

export const {
                productsLoading,
                onFetchProducts
            } = ProductsSlice.actions;