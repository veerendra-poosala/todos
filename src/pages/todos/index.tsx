import { NextPageWithLayout } from "../page";
import { RootState, store } from "@/store/store";
import { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { onCreateTodos } from "./todos.slice";
import { TodoItem } from "./todos.interface";
import { useSelector } from "react-redux";


const Todos: NextPageWithLayout = ()=>{
    const {dispatch} = store;
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);
    const TodosData = useSelector((state : RootState)=>state.todos);
    const {
        todosLoading
    } = TodosData;
    const todos = useMemo(()=>TodosData?.todosData?.data,[TodosData]);

    return(
        <>
            <div className="w-full flex flex-col">
                <div className="w-full text-center">
                    <h1 className="text-white font-sans font-bold text-[2.5rem]">Day Goals</h1>
                </div>
                <div className="mt-[3rem]">
                    <input 
                    type='text' 
                    className='bg-white block md:w-[65%] w-full md:h-[3rem] rounded-md outline-none border-none focus:ring-2 focus:ring-blue-500'
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                    />
                    <button
                        className='flex items-center justify-center w-[8rem] h-[3rem] text-white bg-primary rounded-md'
                        onClick={()=>{
                            const id = uuidv4()
                            const todoItem:TodoItem = {
                                id : id,
                                title : title,
                                updated : 0
                            }
                            dispatch(onCreateTodos(todoItem))
                            setTitle('');
                        }}
                    >
                        Add Todo
                    </button>

                </div>

            </div>
        </>
    )
}

export default Todos;