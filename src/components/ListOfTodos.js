import React from 'react';
import { useState } from 'react';


const ListOfTodos = (props) => {
    const [text, setText] = useState('');

    const onChangeHandler = event => {
        setText(event.target.value);
    }

    const onClickHandler = (event) => {
        event.preventDefault();
        let newTodo = {id: Math.random().toString(), text: text}
        props.addTodoFromChild(newTodo);
        setText('')
    }
    return (
        <div>
            <form>
                <input value={text} onChange={onChangeHandler}></input>
                <button onClick={onClickHandler}>Cool</button>
            </form>
            {props.listOfTodos.map((todo) => <li>{todo.text}</li>)}
        </div>
    );
}

export default ListOfTodos;