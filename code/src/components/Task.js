import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import { DeleteX } from '../assets/DeleteX'
import styled from 'styled-components'

export const Task = ({ itemIndex }) => {
  //om item ändras så ändras hela
  const item = useSelector(store => store.todos.list.items[itemIndex])

  const dispatch = useDispatch()

  //Remove task
  const onRemoveClicked = event => {
    dispatch(
      todos.actions.removeTask({
        itemIndex: itemIndex,
      }
      )
    )
  }

  // done or not status
  const handleOnChange = event => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done
      }))
  }

  return (
    //om den är done så blir classen sådär och överstruken
    // <div className={`todo-item ${item.done ? 'done' : ''}`}>
    <TaskItem>
      <input type='checkbox'
        onChange={handleOnChange}
        checked={item.done ? 'checked' : ''}>
      </input>
      <span>{item.description}</span>
      <RemoveLink
        onClick={onRemoveClicked}>
        <DeleteX />
      </RemoveLink>
    </TaskItem>
  )
}

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  
  padding: 20px;
  border-top: 1px #502F4C solid;
`

const RemoveLink = styled.a`
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 0.9;
  }
`