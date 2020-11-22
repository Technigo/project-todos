import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/Tasks'

export const TaskItems = (props) => {
  const dispatch = useDispatch()

  const handleCheckedBoxClick = () => {
    dispatch(tasks.actions.toggleCheckedTask(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeItem(props.item.id))
  }

  return (
    <li>
      <div className='checkbox-and-name'>
      <label>
      <input
          type="checkbox"
          checked={props.item.checkedTask}
          onChange={handleCheckedBoxClick}
        />
      </label>
      <p>{props.item.todo}</p>
      </div>
      <div className='remove-things'>
        {/* Import a styled button in here using styled components  */}
        <button
        type='button'
        onClick={handleRemoveButtonClick}>
          Remove
        </button>
      </div>
    </li>
  )

}