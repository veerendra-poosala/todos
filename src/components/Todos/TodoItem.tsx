import { GrEdit } from "react-icons/gr";
import Tooltip from '@mui/material/Tooltip';
import { store } from "@/store/store";
import { TodoItem } from "@/pages/todos/todos.interface";
import { onDeleteTodos } from "@/pages/todos/todos.slice";
import React from "react";

interface Props{
    todoData : TodoItem;
    setTitle : React.Dispatch<React.SetStateAction<string>>;
    setUpdate : React.Dispatch<React.SetStateAction<boolean>>;
    setId : React.Dispatch<React.SetStateAction<string | number>>
}

const Todo = (
    {todoData, setTitle, setUpdate, setId }: Props
)=>{
    const {dispatch} = store;

    return(
        <>
            <div className="flex items-center w-full h-[2.45rem] p-[1rem] bg-primary md:overflow-hidden overflow-y-auto">
                <h2 className="flex-grow text-[1rem] text-white">{todoData?.title}
                    <span className="ml-1">{`(Updated ${todoData.updated} ${todoData.updated===1 ? "Time" : "Times"})`}</span>
                </h2>
                <div className="flex items-center w-auto">
                    <Tooltip title="Edit" >
                        <button 
                        className="bg-transparent flex items-center justify-center w-[2.5rem] h-[2.45rem] cursor-pointer"
                        onClick={()=>{
                            setTitle(todoData?.title);
                            setUpdate(true);
                            setId(todoData.id);
                        }}
                        >
                            <GrEdit className="text-white" />
                        </button>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <button 
                        className="text-[red] font-bold bg-transparent flex items-center justify-center w-[2.5rem] h-[2.45rem] cursor-pointer"
                        onClick={()=>{
                            dispatch(onDeleteTodos(todoData));
                        }}
                        >
                                {"X"}
                        </button>
                    </Tooltip>
                </div>
            </div>
        </>
    )

}

export default Todo;