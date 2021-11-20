import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import styled from 'styled-components/macro'

import todos from '../reducers/todos'

const ContainerDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
  
  & span {
    margin-right: 6px;
  }

  & button {
  background: var(--lax);
  color: var(--white);
  font-family: inherit;
  font-size: 14px;
  border: 1px solid var(--brown);
  border-radius: 0.4em;
  padding: 0 3px;
  cursor: pointer;
  }

  @media (min-width: 667px) {
    margin: 10px 0;
  }
`

const CompletedToDos = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const AllToDos = useSelector(
    (state) => state.todos.items.length
  )
  const completedToDos = useSelector(
    (state) => state.todos.items.filter((item) => item.isComplete)
  )

  const noTasks = useSelector(
    (state) => state.todos.items.length === 0
  )

  const onCompleteAll = () => {
    dispatch(todos.actions.completeAll())
    navigate('/')
  }

  return (
    <>
    {!noTasks &&
    <ContainerDiv>
      <span>Completed ToDos: {completedToDos.length}/{AllToDos} </span> 
      <button
        type='button'
        onClick={onCompleteAll}
      >Clear all</button> 
    </ContainerDiv>}
    </>
  )
}

export default CompletedToDos
