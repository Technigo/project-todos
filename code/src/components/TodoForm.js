import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux'

import moment from 'moment'

import todos from '../reducers/todos'

const TodoForm = () => {
    const [value, setValue] = useState("")

    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: uniqid(),
            description:value, //Value above in row 5
            isComplete:false,
            //date: moment().format('LLLL')
            date: Date.now()
        }

        dispatch(todos.actions.addTodo(newTodo));
        setValue(''); // By writing this we clear are input after sending input
    }

    return(
        <form onSubmit={onFormSubmit}>
            <input 
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm