import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Task } from "components/Task"



export const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const countUncompleted = taskList.filter((item) => !item.complete)
  const [showTaskList, setShowTaskList] = useState(false)

  return (
    <div>
      <ul>
        {taskList.map((task) => (
          <Task key={task.id} task={task} timeCreated={task.timeCreated} />
        ))}
      </ul>
      <div className="uncompleted-tasks">
        {countUncompleted.length} uncompleted task
        {countUncompleted.length === 1 ? "" : "s"}
        <span
          onClick={() => setShowTaskList(!showTaskList)}
          role="img"
          aria-label="emoji"
          className="uncompleted-emoji"
        >
          📔
        </span>
      </div>

      {showTaskList && (
        <ol>
          {countUncompleted.map(item => <li key={item.id}>{item.text}</li>)}
        </ol>
      )}
    </div>
  )
}