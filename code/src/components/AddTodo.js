import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'

// import DatePicker from 'react-date-picker';

import { todos } from '../reducers/todos'
// import saveTodo from '../reducers/todoSlice'

// import './Input.css'

export const AddTodo = () => {
    const [inputValue, setInputValue] = useState(''); 
    const dispatch = useDispatch();
 
    const onItemAdd = () => {
        dispatch(todos.actions.addTodoItem(inputValue));
        setInputValue('');
    };
    
    


    return (
            <form>
                <div className="input">
                    <input 
                        required
                        id="todo-task"
                        type="text"
                        placeholder="Add New Stuff" 
                        onChange={event => setInputValue(event.target.value)}
                        value={inputValue}
                    />
                    <button type="submit" onClick={onItemAdd} disabled={!inputValue}>
                        +
                    </button>
                </div>
            </form>
    )
}
