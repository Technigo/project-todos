import React from "react"
import { useSelector } from "react-redux"
import TodoList from "./TodoList"

const FilteredList = () => {
    const completedTasks = useSelector(store => store.todos.items.filter(todo => todo.isComplete))
    const notCompletedTasks = useSelector(store => store.todos.items.filter(todo => !todo.isComplete))

    return (
        <>
            <div className='completed-tasks'>
                <h1>Completed tasks</h1>
                    {completedTasks.map(item => (
                        <TodoList key={item.id} item={item} />
                    ))}
            </div>
            <div className='uncompleted-tasks'>
                <h1>Uncompleted tasks</h1>
                    {notCompletedTasks.map(item => (
                        <TodoList key={item.id} item={item} />
                    ))}
            </div>
        </ >
    )
}

export default FilteredList