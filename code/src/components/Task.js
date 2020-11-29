import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'
// need to import the reducer we dispatch our action to

const ListItem = styled.li`
  padding: 10px 0;
  font-size: 20px;
  height: 24px;
  width: 300px;
  border-bottom: 1px solid black;

  list-style: none;
  text-align: left;

  display: flex;
  justify-content: space-between;
`

const Wrapper = styled.div`
  margin-top: -3px;
`

const Text = styled.p`
  display: inline;
`

const CompleteButton = styled.button`
  border-radius: 50px;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  border: none;
  color: white;

  &:hover {cursor: pointer};

  &.complete {background-color: #02DF0B};
  &.notComplete {background-color: white};
`

const DeleteButton = styled.button`
  border-radius: 50px;
  border: none;
  color: red;
  background-color: #E5E5E5;
  margin-top: 5px;

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