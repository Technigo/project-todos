import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

//import slice
import todos from '../reducers/todos'

const TodoList = () => {
    //Same name as property name in reducer.
    //useSelector hook with access to whole store - only reaching for data in items[]
    const  items = useSelector((store) => store.todos.items)
    console.log(items)

    //Create instance of useDispatch hook.
    const dispatch = useDispatch()

    return (
        <div>
            {items.map(todo =>(
                <div key={todo.id}>
                    <p>{todo.description}</p>
                    <input 
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                    />
                </div>
            ))}
        </div>
    )
}

export default TodoList