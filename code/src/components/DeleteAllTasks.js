/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import styled from 'styled-components'
import { VscTrash } from 'react-icons/vsc';
import { IconContext } from 'react-icons'

const DeleteAllTask = () => {
  const dispatch = useDispatch()

  const DeleteAllToDos = () => {
    dispatch(todos.actions.removeAllToDos())
  }
  const white = useMemo(() => ({ color: 'white' }), [])

  return (
    <RemoveAllTasks onClick={DeleteAllToDos} type="button">
      <IconContext.Provider value={white}>
        <VscTrash size={20} />
      </IconContext.Provider>
    </RemoveAllTasks>
  )
}

export default DeleteAllTask

const RemoveAllTasks = styled.button`
background-color: transparent;
border: white solid 0.5px;
border-radius: 20px;
padding: 10px;
position: absolute;
top: 2.5vh;
right: 10vw;
display: flex;
align-items: center;
justify-content: center;
&:hover {
  background-color: lightpink;
}
@media (min-width: 668px) and (max-width: 1024px) {
  right: 20vw;
} 
  @media (min-width: 1025px) {
  right: 25vw;
} 
`