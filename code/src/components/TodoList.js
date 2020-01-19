import React from 'react'
import { useSelector } from 'react-redux'
import { Todo } from 'components/Todo'


export const TodoList = () => {
    // todos = items - todoTasks  = fridge
    //whatever this functions returns, becomes the todo-list
    const todos = useSelector((state) => state.todoTasks.todos)


return (
        <div className="todos">
            <ul>
                {todos.map((todo) => (
                    // Mounted the single todos with map
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    )
}