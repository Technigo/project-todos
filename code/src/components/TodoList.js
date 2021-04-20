import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

//import slice
import todos from '../reducers/todos'


const TodoList = () => {
    //Same name as property name in reducer.
    //useSelector hook with access to whole store - only reaching for data in items[]
    const  items = useSelector((store) => store.todos.items)

    //user input state 
    const [value, setValue] = useState('')

    //Create instance of useDispatch hook.
    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault()
        console.log('Your first task: ' + value)
        //Clear input
        setValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            {items.map(todo =>(
                <div key={todo.id}>
                    <input 
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                    />
                    <p>{todo.description}</p>
                </div>
            ))}
            <input
                type="text"
                placeholder="Add new task.."
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TodoList