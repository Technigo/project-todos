/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import tasks from 'reducers/task'
import { Wrapper, Button } from 'styledcomponents/GlobalStyles';
import { formatRelative } from 'date-fns';

const TaskList = () => {
  const listTasks = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch()

  const onToDoToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  }

  const onToDoDelete = (index) => {
    dispatch(tasks.actions.deleteItem(index))
  }
  return (
    <>
      {listTasks.map((newTodo, ToDoIndex) => (
        <listedTasks key={newTodo.id}>
          <Wrapper>
            <p>{newTodo.name}</p>
            <p>{newTodo.description}</p>
          </Wrapper>
          <div>
            <p>{formatRelative(new Date(), new Date())}</p>
          </div>
          <div>
            <input
              type="checkbox"
              checked={newTodo.isDone}
              onChange={() => onToDoToggle(newTodo.id)} />
            <label
              htmlFor="done">
                Done
            </label>
          </div>

          <Button
            type="button"
            onClick={() => onToDoDelete(ToDoIndex)}>Delete
          </Button>

        </listedTasks>
      ))}
    </>
  )
}

export default TaskList