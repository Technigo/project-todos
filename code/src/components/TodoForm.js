import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

import todos from '../reducers/todos';

const TodoForm = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: uniqid(),
            description: value,
            isComplete: false
        };

        dispatch(todos.actions.addTodo(newTodo));
        setValue('');
    }

    return(
        <form className="form" onSubmit={onFormSubmit}>
            <input className="input"
               placeholder="Write your todo here..."
               type="text"
               value={value}
               onChange={e => setValue(e.target.value)}
            />
            <button className="button" type="submit">ADD</button>
        </form>
    )
};

export default TodoForm;