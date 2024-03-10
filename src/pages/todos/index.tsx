import { NextPageWithLayout } from "../page";
import { RootState, store } from "@/store/store";
import { useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { onCreateTodos, onUpdateTodos } from "./todos.slice";
import { TodoItem } from "./todos.interface";
import { useSelector } from "react-redux";
import Todo from "@/components/Todos/TodoItem";


const Todos: NextPageWithLayout = ()=>{
    const {dispatch} = store;
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
    const [update, setUpdate] = useState(false);
    const TodosData = useSelector((state : RootState)=>state.todos);
    const todos = useMemo(()=>TodosData?.todosData?.data,[TodosData]);

    const createTodo = ()=>{
        const id = uuidv4()
        const todoItem:TodoItem = {
            id : id,
            title : title,
            updated : 0
        }
        dispatch(onCreateTodos(todoItem))
        setTitle('');
    }

    const updateTodo = ()=>{
        const todo:TodoItem = todos?.find(item=>item?.id === id); 
        setId('');
        setUpdate(false);
        setTitle('');
        dispatch(onUpdateTodos(todo));

    }



    return(
        <>
            <div className="w-full flex flex-col">
                <div className="w-full text-center">
                    <h1 className="text-white font-sans font-bold text-[2.5rem]">Day Goals</h1>
                </div>
                <div className="mt-[3rem] w-full md:flex items-center">
                    <input 
                    type='text' 
                    className='bg-white block pl-[1rem] w-full md:h-[3rem] flex-grow rounded-tl-md rounded-bl-md  outline-none border-none focus:ring-2 focus:ring-blue-500'
                    value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                    onKeyUp={(e)=>{
                        if(e.key == 'Enter'){
                            if (!update){
                                createTodo();
                            }else{
                                updateTodo()
                            }
                        }
                    }}
                    />
                    <button
                        className='flex items-center justify-center w-[8rem] md:h-[3rem] rounded-tr-md rounded-br-md text-white bg-primary'
                        onClick={()=>{
                            if (!update){
                                createTodo();
                            }else{
                                updateTodo()
                            }
                        }}
                    >
                        {`${!update ? "Add Todo" : "Update Todo"}`}
                    </button>

                </div>
                <ul className="w-full flex flex-col mt-[3rem] ml-0 p-0">
                    {
                        todos?.map(item=>(
                            <li key={item.id} className="w-full p-0 my-3">
                                <Todo 
                                    setTitle={setTitle} 
                                    todoData={item} 
                                    setId={setId}
                                    setUpdate={setUpdate}
                                />
                            </li>
                        ))
                    }
                </ul>

            </div>
        </>
    )
}

export default Todos;