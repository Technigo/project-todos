import React from 'react'
import { useSelector } from 'react-redux'

const TodoCounter = () => {
    const allTodos = useSelector((state) => state.tasks.taskList)
    const completedTodos = allTodos.filter((taskList) => taskList.isChecked === true)

    if (allTodos.length !== completedTodos.length){
        return(
            <p>You have completed {completedTodos.length}/{allTodos.length} todos</p>
        )
    } else{
        return(
            <p>Nothing do do right now</p>
        )
    }
}

export default TodoCounter


//todoList stores all tasks
//completedTodos stores all checked todos