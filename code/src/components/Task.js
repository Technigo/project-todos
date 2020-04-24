import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import { DeleteX } from '../assets/DeleteX'
import { CustomCheckbox } from 'components/CustomCheckbox'
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
    <TaskItem>
      <CustomCheckbox
        onChange={handleOnChange}
        isChecked={item.done ? 'checked' : ''} />
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
  font-family: 'Noto Sans';
  margin: 14px;
  padding-bottom: 14px;
  border-bottom: 1px #502F4C solid;
`

const RemoveLink = styled.a`
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 0.9;
  }
`