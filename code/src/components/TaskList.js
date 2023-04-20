import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import tasks from 'reducers/tasks'

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

  const onDeleteSingleTaskBtnClick = (id) => {
    dispatch(tasks.actions.deleteSingleTask(id))
  }

  const onIsDoneCheckboxToggle = (id) => {
    dispatch(tasks.actions.toggleIsDone(id))
  }

  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <p>
                <span>{singleTask.name}</span>
                <button
                  type="button"
                  onClick={() => onDeleteSingleTaskBtnClick(singleTask.id)}>
                  Delete task
                </button>
                <label htmlFor={`task${singleTask.id}`}>
                  Status
                  <input
                    id={`task${singleTask.id}`}
                    type="checkbox"
                    value={singleTask.isDone}
                    onChange={() => onIsDoneCheckboxToggle(singleTask.id)}
                  />
                </label>
              </p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default TaskList
