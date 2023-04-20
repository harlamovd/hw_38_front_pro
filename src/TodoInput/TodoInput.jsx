import {useRef} from "react";
import './TodoInput.css';

function TodoInput ({addTodo}){
    const valueNew = useRef(null);

    function buttonClickHandler () {
        addTodo(valueNew.current.value);
        valueNew.current.value = null;
    }

    return (
        <>
            <p className="input_title"> Створіть нову задачу</p>
            <input
                className="input_string"
                type="text"
                ref={valueNew}
            />
            <button className="input_button" onClick={buttonClickHandler}> Додати </button>
        </>
    )
}
export default TodoInput