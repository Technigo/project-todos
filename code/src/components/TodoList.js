import React from 'react'
import { AddedTodo } from './AddedTodo'
import { useSelector } from 'react-redux'

export const TodoList = () => {
    const allTodos = useSelector((store) => store.todos)


    return (
        <div className="todos">
            <li>
                {allTodos.map((todo) => (
                    <AddedTodo key={todo.id} todo={todo} />
                ))}
            </li>
        </div>
    )
}