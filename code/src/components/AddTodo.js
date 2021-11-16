import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import todos from '../reducers/todos';



const AddTodo = () => {
    // This function is responsible for sending the input's value from the user to the addTodo reducer.

    const [input, setInput] = useState('');
    const dispatch = useDispatch();// sends the info to the reducers

    //function btn
    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input)) //input replace the action parameter
    };


    return(
        <div>
            <input type='text'
            value={input}
            onChange={(event) => setInput(event.target.value)}
            
            />
            <button onClick={onAddTodo}>Add</button>

        </div>
    );
}

export default AddTodo;