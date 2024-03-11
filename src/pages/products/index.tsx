import { useSelector } from "react-redux";
import { NextPageWithLayout } from "../page";
import { RootState } from "@/store/store";
import { useEffect, useMemo } from "react";
import {list} from './products.api';


const Products:NextPageWithLayout = ()=>{

    const ProductsData = useSelector((state : RootState)=>state.products);

    const fetchDetail = async()=>{
        const res = await list();
        console.log("res",res);
    }

    useEffect(()=>{
        fetchDetail()
    },[]);

    return(
        <h1>Products</h1>
    )
}

export default Products;