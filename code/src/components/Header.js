import React from 'react' 
import { TodoSummary } from './TodoSummary.js';

export const Header = () => {
    //const items = useSelector((store) => store.todos.items)
    //const finishedTodos = items.filter((item) => item.isComplete)

    return (
        <div>
            <h1>Todo List</h1>
            <TodoSummary />
        </div>
    )
}