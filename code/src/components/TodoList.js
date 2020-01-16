import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from 'components/Todo'
//import { AddedTodo } from './AddedTodo'


export const TodoList = () => {
    const todos = useSelector((state) => state.todoTasks.todos)


    return (
        <div className="todos">
            <ul>
                {todos.map((todo) => (
                    //Mounted the single todo with map
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    )
}