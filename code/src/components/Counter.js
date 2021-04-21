import React from 'react';
import { useSelector } from 'react-redux'


const Counter = () => {
    const items = useSelector((store) => store.todos.items)
    const leftTodo = items.filter(todo => todo.isComplete === false )

    return (
        <div>
            <p>you have {leftTodo.length} out of {items.length} todos remaining </p>
        </div>
    )
}

export default Counter
