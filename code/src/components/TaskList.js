import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Task from './Task'

import todoList from '../reducers/todoList'

const TaskList = () => {

  const tasks = useSelector((store) => store.todolist.tasks)

  return ( //eventually move tasks into their own Task component!
    <div className="task-list">
      {tasks.map(task => (
        <Task
          task={task}
          key={task.id}
        />
      ))}
    </div>
  )
}

{/* <input
                        type="checkbox"
                        checked={task.isComplete}
                        onChange={() => dispatch(todoList.actions.toggleComplete(task.id))}
                    >
                    </input>
                    <p>{task.description}</p>
                    <button onClick={() => dispatch(todoList.actions.removeTask(task.id))}>
                        DeLET
                    </button> */}

export default TaskList