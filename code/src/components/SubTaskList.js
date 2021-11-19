import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import { todos } from '../reducers/todos'

const TodoSection = styled.section`
  padding: 0 10px;
`
const TodoItem = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(244, 244, 244);
  padding: 5px 5px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
`
const TodoText = styled.p`
  margin: 0;
  flex-grow: 1;
  font-size: 1rem;
`
const Checkbox = styled.input`
  border-radius: 50%;
`
const Button = styled.button`
  margin: 5px;
  height: 2rem;
  width: 2rem;
  font-size: 1rem;
  text-align: center;
  border-radius: 10px;
  border: 0;
  color: black;
`
const Dates = styled.div`
  display: flex;
  flex-direction: column;
  & p {
    font-size: 0.6rem;
  }
`

export const SubTaskList = () => {
  const items = useSelector(store => store.todos.selectedItem.subTasks)
  const dispatch = useDispatch()

  const onToggleSubTask = id => {
    dispatch(todos.actions.toggleSubTask(id))
  }

  const onDeleteSubTask = id => {
    dispatch(todos.actions.deleteSubTask(id))
  }

  return (
    <TodoSection>
      {items.map(item => (
        <TodoItem key={item.id}>
          <Checkbox
            type='checkbox'
            checked={item.isComplete}
            onChange={() => onToggleSubTask(item.id)}
          />
          <TodoText>{item.text}</TodoText>
          <Dates>
            <p>Created: {moment(item.createdAt).fromNow()}</p>
            {item.dueDate && <p>Due: {moment(item.dueDate).fromNow()}</p>}
          </Dates>
          <Button onClick={() => onDeleteSubTask(item.id)}>x</Button>
        </TodoItem>
      ))}
    </TodoSection>
  )
}
