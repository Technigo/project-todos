import React from 'react'
import { useSelector } from 'react-redux'

const TodoCounter = () => {
    const todoList = useSelector((state) => state.tasks.taskList)
    const unCompletedTodos = todoList.filter((taskList) => taskList.isChecked === true)


    return(
        <p>You have completed {unCompletedTodos.length}/{todoList.length} todos</p>
    )

}

export default TodoCounter


