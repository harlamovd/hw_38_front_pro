import './TodoBlock.css';
function TodoBlock ({status, todo, changeTodo}) {
    const filterTodo = todo.filter((el) => el.completed === status);
    const todoElements = filterTodo.map(el => (
        <li className='element_todo' key={el.id} onChange={()=>{changeTodo(el.id)}}>
            <label className={el.completed ? 'label_todo__completed': 'label_todo'}>
                <input className='input_todo' type='checkbox' key={el.id} defaultChecked={el.completed}  />
                {el.todo}
            </label>
        </li>
    ));
    return (
        <ul className='list_todo'>
            {todoElements}
        </ul>
    );
}
export default TodoBlock