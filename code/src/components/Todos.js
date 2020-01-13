import React from 'react'
import { Todo } from './Todo'
import { useSelector } from 'react-redux'

export const Todos = () => {
    const allTodos = useSelector((store) => store.todos)


    return (
        <div className="todos">
            {allTodos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    )
}