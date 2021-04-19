import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    //Same name as property name in reducer.
    //useSelector hook with access to whole store
    const  items = useSelector((store) => store.todos.items)
    console.log(items)

    return (
        <div>
            <p>This is where the todo list will show</p>
        </div>
    )
}

export default TodoList