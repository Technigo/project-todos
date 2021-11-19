import React from 'react'
import { todos } from 'reducers/todos'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

const CompleteAllButton = styled.button`
  align-items: center;
  margin-right: 5px;
  width: 70px;
  height: 30px;
  color: #4398bf;
  border: 2px solid #4398bf;
  border-radius: 15px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #4398bf;
    color: #fff;
  }
`

export const CompleteAllTodos = () => {
  const items = useSelector((store) => store.todos.items)
  const dispatch = useDispatch()

  const onCompleteAll = (items) => {
    dispatch(todos.actions.completeAllTodos(items))
  }

  return (
    <CompleteAllButton onClick={() => onCompleteAll(items)}>
      Check all
    </CompleteAllButton>
  )
}
