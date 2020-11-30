import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'
// need to import the reducer we dispatch our action to

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  height: 24px;
  width: 300px;
  list-style: none;
  border-bottom: 1px solid black;
  text-align: left;
  font-size: 20px;
`

const Wrapper = styled.div`
  margin-top: -3px;
`

const Text = styled.p`
  display: inline;
`

const CompleteButton = styled.button`
  margin-right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  border: none;
  color: white;

  &:hover {cursor: pointer};

  &.complete {background-color: #02DF0B};
  &.notComplete {background-color: white};
`

const DeleteButton = styled.button`
  margin-top: 5px;  
  border-radius: 50px;
  border: none;
  background-color: #E5E5E5;
  color: red;

  &:hover {cursor: pointer};
`

export const Task = ({ task }) => {

  const dispatch = useDispatch()

  const removeTask = (id) => {
    dispatch(todos.actions.removeTask(id))
  }

  const updateTask = (task) => {
    dispatch(todos.actions.updateTask(task))
  }

  return (
    <ListItem>
      <Wrapper>
        <CompleteButton
          onClick={() => updateTask(task)}
          className={task.isComplete ? 'complete' : 'notComplete'}>
          V
        </CompleteButton>
        <Text>
          {task.text}
        </Text>
      </Wrapper>
      <DeleteButton onClick={() => removeTask(task.id)}>
        X
      </DeleteButton>
    </ListItem>
  )
}