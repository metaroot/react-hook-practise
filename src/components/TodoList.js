import React from 'react';
import ListOfTodos from './ListOfTodos';
import { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([
        {id: '1', text: 'todo1'},
        {id: '2', text: 'todo2'},
    ])

    const addTodos = (newTodo) => {
        setTodos(todos => todos.concat(newTodo));
        console.log(todos);
    }
    
    return (
     <div>
         <ul>
            <ListOfTodos addTodoFromChild={addTodos} listOfTodos={todos}/>
         </ul>
     </div> 
    );
}

export default TodoList;