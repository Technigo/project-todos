import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import todoList from '../reducers/todoList'

const TaskList = () => {
    const tasks = useSelector((store) => store.todolist.tasks) //so the file is called todoList... but redux doesn't understand capital letters???
    
    const dispatch = useDispatch()

    console.log(tasks)

    return (
        <div>{tasks.map(task => (
            <div key={task.id}>
                <p>{task.description}</p>
                <input
                    type="checkbox"
                    checked={task.isComplete}
                    onChange={() => dispatch(todoList.actions.toggleComplete(task.id))}
                >
                </input>
                <button onClick={() => dispatch(todoList.actions.removeTask(task.id))}>
                    DeLET
                </button>
            </div>
        ))}</div>
    )
}

export default TaskList