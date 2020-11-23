import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/Tasks'

// import styled from 'styled-components'

import { Button } from '../shared/Button'

import './TaskItems.css'

// const Container = styled.View`
//   flex: 0.5;
//   width: 100%;
//   background-color: #000;
//   justify-content: center;
//   align-items: center;
// `


export const TaskItems = (props) => {
  const dispatch = useDispatch()

  const handleCheckedBoxClick = () => {
    dispatch(tasks.actions.toggleCheckedTask(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeItem(props.item.id))
  }

  return (
    <li className='list-task'>
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
        <Button onClick={handleRemoveButtonClick}>
          <span role ='img' aria-label = 'checked'>✔</span>
        </Button>
      </div>
    </li>
  )

}