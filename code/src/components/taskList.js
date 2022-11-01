import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import tasks from 'reducers/task'

const TaskList = () => {
  const listTasks = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch()

  const onToDoToggle = (id) => {
    dispatch(tasks.actions.deleteItem(id))
  }

  /* const onToDoDelete = (index) => {
    dispatch(tasks.actions.deleteItem(index))
  } */
  return (
    <id>
      {listTasks.map((newTodo /* TodoIndex */) => (
        <listedTasks key={newTodo.id}>
          <div>
            <p>{newTodo.name}</p>
            <p>{newTodo.description}</p>
          </div>
          <div>
            <input
              type="checkbox"
              checked={newTodo.isDone}
              onChange={() => onToDoToggle(newTodo.id)} />
          </div>

        </listedTasks>
      ))}
    </id>
  )
}

export default TaskList