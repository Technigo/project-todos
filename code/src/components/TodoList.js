import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const items = useSelector((store) => store.todos.items)
    console.log(items)

    return (
        <div>
            {items.map(todo => (
                <div key={todo.id}>
                    <p>{todo.description}</p>
                    <input
                        type='checkbox'
                        checked={todo.isComplete}
                    />
                </div>
            ))}
        </div>
    )
}

export default TodoList
