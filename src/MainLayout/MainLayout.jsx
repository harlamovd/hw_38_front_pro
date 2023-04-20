import {useEffect, useState} from "react";
import TodoBlock from "../TodoBlock/TodoBlock";
import TodoInput from "../TodoInput/TodoInput";
import './MainLayout.css';



function MainLayout () {
    const [todo, setTodo]= useState(JSON.parse(localStorage.getItem('todoData')));

    useEffect(()=>{
        localStorage.setItem('todoData', JSON.stringify(todo));
        }, [todo]);

    function changeStatusTodo (key){
        const copyTodo = [... todo];
        const findTodo = copyTodo.find((el) => el.id === key);
        findTodo.completed = (!findTodo.completed);
        setTodo(copyTodo);
    };

    function addNewTodo (value){
        if (!value) {
            return
        }
        const copyTodo = [... todo];
        const newElement = {
            id: `t_${copyTodo.length}`,
            completed: false,
            todo: value,
        }
        copyTodo.push(newElement);
        setTodo(copyTodo);
    }

    return (
        <>
        <div className='wrapper_todo'>
            <div className='todo_not_completed'>
                <h2 className='todo_title'> В процесі </h2>
                < TodoBlock status={false} todo={todo} changeTodo={changeStatusTodo} />
                <div className='wrapper_input'>
                    < TodoInput addTodo={addNewTodo}/>
                </div>
            </div>
            <div className='todo_completed'>
                <h2 className='todo_title'> Завершені </h2>
                < TodoBlock status={true} todo={todo} changeTodo={changeStatusTodo} />
            </div>
        </div>

        </>
    )

}
export default MainLayout