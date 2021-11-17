import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'

import todos from '../reducers/todos'

const ContainerDiv = styled.div `

`
const StyledForm = styled.form `
  width: 80vw;
  margin: 10px 0;
  border: 1px solid grey;
`

const ToDos = () => {
  const tasks = useSelector((state) => state.todos.items)
  const dispatch = useDispatch()
  const trashCanIcon = <FontAwesomeIcon icon={faTrashAlt} />
  const editIcon = <FontAwesomeIcon icon={faPen} />

  return (
    <ContainerDiv>
      {tasks.map((task) => (
        <StyledForm key={task.id}>
          <label>
            <input 
              type='checkbox' 
              onChange={() => dispatch(todos.actions.toggleIsComplete(task.id))}
            />{task.task}
          </label>
          <button onClick={() => dispatch(todos.actions.removeToDo(task.id))}>{trashCanIcon}</button>
          <button >{editIcon}</button>
          <p>Created at: {moment().format("MMM Do YY")}</p>
        </StyledForm>
      ))}
    </ContainerDiv>
  )
}

export default ToDos
