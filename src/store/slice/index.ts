import { ProductsReducer } from "@/pages/products/products.slice";
import { TodosReducer } from "@/pages/todos/todos.slice";

export const reducer: any = {
    todos : TodosReducer,
    products : ProductsReducer
}
