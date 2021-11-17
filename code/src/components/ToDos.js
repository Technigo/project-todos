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
  padding: 5px;
  font-size: 20px;
  border: 1px solid var(--red);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const StyledParagraph = styled.p `
  width: 100%;
  text-align: left;
  font-size: 14px;
  margin-bottom: 0;
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
          <label htmlFor='completed'>{task.task}</label>
          <div>
            <input 
              id='completed'
              type='checkbox' 
              onChange={() => dispatch(todos.actions.toggleIsComplete(task.id))}
            />
            <button >{editIcon}</button>
            <button onClick={() => dispatch(todos.actions.removeToDo(task.id))}>{trashCanIcon}</button>
          </div>
          <StyledParagraph>{moment(task.newDate).format("D. MM. YYYY")}</StyledParagraph> 
        </StyledForm>
      ))}
    </ContainerDiv>
  )
}

export default ToDos
