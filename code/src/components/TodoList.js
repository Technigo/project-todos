import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

//import slice
import todos from '../reducers/todos'
import AddTodoItem from './AddTodoItem'


const TodoList = () => {
    //Same name as property name in reducer.
    //useSelector hook with access to whole store - only reaching for data in items[]
    const  items = useSelector((store) => store.todos.items)

    //Create instance of useDispatch hook.
    const dispatch = useDispatch()

    return (
        <div>
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
            <AddTodoItem />
        </div>
    )
}

export default TodoList