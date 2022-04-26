import React, { useState } from 'react'
import todos from 'reducers/todos';
import { useDispatch, useSelector } from 'react-redux';

const TodoInput = () => { 
    const [inputValue, setInputValue] = useState("");

    const allTodos = useSelector((store) => store.todos.items);    
    const completedTodos = allTodos.filter(todos => todos.isDone)

    const dispatch = useDispatch();
    
    const onInputSubmit = (event) => {
        event.preventDefault();

        const newTodo = {
            id: Date.now(),
            name: inputValue,
            description: inputValue,
            isDone: false
        }

    dispatch(todos.actions.addTodos(newTodo));

    setInputValue("")

    }

    return (
        <form onSubmit= {onInputSubmit}>
    <div className="addTodos">
        <input 
        type="text"
        value={inputValue}
        item={inputValue}
        onChange={ (e) => setInputValue(e.target.value)}
        className="todo-input" 
        />
        <button className="add-btn" 
        onClick={() => ({
            id: Date.now(), //Generates the unique ID that was typed in
            item: inputValue, 
            completed: false, //Boolean value set to false
        })}>Submit</button>
        <br/>
    </div>
    <div className="counter">Completed todos {completedTodos.length} / {allTodos.length}</div>  
    </form>
  );
};
//Using connect method to connect the react component with redux store
export default TodoInput;

