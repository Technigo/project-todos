import React from 'react'
import { useSelector } from 'react-redux' 

const TodoCountComplete = () => {
    const tasks = useSelector((store) => store.todos.tasks);
    const completedTasks = tasks.filter(singelTask => singelTask.isComplete)

    return (
        <>
        <div>Tasks:{tasks.length}</div>
        <div>Completed tasks:{completedTasks.length}</div>
        </>
    )
}
export default TodoCountComplete