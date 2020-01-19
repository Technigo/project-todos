import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components/macro'
import './todo.css'

export const Todo = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleCompleted(props.todo.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeTask(props.todo.id))
  }


  return (
    <ListWrapper>
      <ListItem>
        <div className="checkbox-and-item-name">
          <label className="checkbox-label">
            <input type="checkbox"
              checked={props.todo.completed}
              onChange={handleCheckboxClick} />
            <span className="fakeCheckbox" ariaLabel="checkbox"></span>
          </label>
          <p className={props.todo.completed ? 'checked' : 'unchecked'}>
            <span className="text"> {props.todo.text}</span>
          </p>
        </div>
      </ListItem>
      <button type="button" onClick={handleRemoveButtonClick}>
        <span className="emoji" role="img" aria-label="add task"> ❌</span>
      </button>
    </ListWrapper>
  )
}


const ListWrapper = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

const ListItem = styled.section`
  display: flex; 
  justify-content: space-between;
  padding-bottom: 0px;
  padding-left: 10px;
  margin-top: 6px;
  border-bottom-width: 1px;
  font-size: 17px;
  font-weight: 600;
  color: black;
`

