import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { todoTasks } from 'reducers/todoTasks'

// defined our state from react
export const TodoTasksSummary = () => {
    // keeps track of all the things to do / summary
    const todos = useSelector(state => state.todoTasks.todos)
    // keeps track of the things not checked or completed yet
    // filter (online shopping) gets many things out / find (look for one word ex) only one item
    const stillTodos = todos.filter(todo => todo.completeTodo)


    const [ShowTodoList, setShowTodoList] = useState(false)

    return (
        <section>
            <h1> I have in total {todos.length} on my agenda </h1>
            <h2>I still need to do {stillTodos.length} these thing 
            {stillTodos.length ===1 ? "." : "s."}</h2>
            <span onClick={() => setShowTodoList(!ShowTodoList)}> Get going / thins to do! </span>

            {ShowTodoList && (
                <ol>
                    {stillTodos.map(todo => <li key={todo.id}>{todo.name}</li>)}
                </ol>
            )}
        </section>
    )
}



