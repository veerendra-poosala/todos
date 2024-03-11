

import {get, post} from '../api/interceptor';
import { store } from '@/store/store';
import { onFetchProducts, productsLoading } from './products.slice';


const host = process.env.NEXT_PUBLIC_BASE_API_URL;
const { dispatch } = store;

export const list = async () => {
    try {
      const res: any = await get(
        `${host}/products`
      );
    dispatch(onFetchProducts(res));
      return res.data;
    } catch (error) {
      console.log('error', error);
    } finally {
      dispatch(productsLoading());
  }
};