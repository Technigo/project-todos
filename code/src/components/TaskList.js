import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

const TaskList = () => {
  const dispatch = useDispatch();

  // Get all the tasks currently in the store
  const allTasks = useSelector((store) => store.tasks.items)

  // Toggle function
  const onIsDoneToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }

  // Remove items from the store / list
  const onRemoveTaskButtonClick = (taskId) => {
    dispatch(tasks.actions.removeTask(taskId));
  }

  return (
    <section>
      <wrapper>
        {allTasks.map((singleTask) => {
          return (
            <div key={singleTask.id}>{singleTask.name}
              <label htmlFor="done">Done
                <input
                  type="checkbox"
                  id="done"
                  checked={singleTask.isDone}
                  onChange={() => onIsDoneToggle(singleTask.id)} />
              </label>
              <button onClick={() => onRemoveTaskButtonClick(singleTask.id)} type="button">remove</button>
            </div>
          )
        })}
      </wrapper>
    </section>

  )
}

export default TaskList