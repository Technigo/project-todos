/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import styled from 'styled-components'

const DeleteAllTask = () => {
  const dispatch = useDispatch()

  const DeleteAllToDos = () => {
    dispatch(todos.actions.removeAllToDos())
  }

  return (
    <RemoveAllTasks onClick={DeleteAllToDos} type="button">Remove all</RemoveAllTasks>
  )
}

export default DeleteAllTask

const RemoveAllTasks = styled.button`
background-color: red;
color: white;
border: blue;
`