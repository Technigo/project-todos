/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import styled from 'styled-components'

const DeleteTask = () => {
  const dispatch = useDispatch()

  const DeleteToDo = () => {
    dispatch(todos.actions.removeToDo())
  }

  return (
    <RemoveTask onClick={DeleteToDo} type="button">❌</RemoveTask>
  )
}

export default DeleteTask

const RemoveTask = styled.button`
    background-color: transparent;
    border: none;
    &:hover {
        transform: scale(1.3);
    }
    `