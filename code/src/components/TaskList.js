import React from "react"
import { useSelector } from "react-redux"
import Task from "./Task"

const TaskList = () => {
  const tasks = useSelector((store) => store.todolist.tasks)

  return (
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

export default TaskList