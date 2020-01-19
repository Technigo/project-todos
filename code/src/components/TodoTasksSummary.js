import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { todoTasks } from 'reducers/todoTasks'

// defined our state from react
export const TodoTasksSummary = () => {
    // keeps track of all the things to do / summary
    const todos = useSelector(state => state.todoTasks.todos)
    // keeps track of the things checked and completed 
    // filter (online shopping) gets many things out / find (look for one word ex) only one item
    const stillTodos = todos.filter(todo => todo.completeTodo)
    // shows the list on whats left to do
    const [ShowTodoList, setShowTodoList] = useState(false)

    return (
        <div className="summary">
            {/* <h4> {stillTodos.length} ✔️ of {todos.length} */}
            <h4> {stillTodos.length} / {todos.length}
                <span
                    type='button'
                    onClick={() => setShowTodoList(!ShowTodoList)}>
                    📝
                </span>
            </h4>

            {ShowTodoList && (
                <ol>
                    {stillTodos.map(
                        todo => <li key={todo.id}>{todo.name}</li>)}
                </ol>
            )}
        </div>
    )
}