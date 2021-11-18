import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'

import todos from '../reducers/todos'

const ContainerDiv = styled.div `
  height: 57vh;
  margin-top: -50px;
  overflow-y:auto;
`
const StyledForm = styled.form `
  width: 80vw;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 20px;
  border: 1px solid var(--red);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 5px;
  opacity: ${props => props.completed ? 0.3 : 1};;
  background-color: ${props => props.category === 'Study' ? 'var(--lax)' : props.category === 'Work' ? '#bcc1a5' : props.category === 'Shopping' ? '#9e9dd9' : '#facdc5'};

  & button {
    background-color: transparent;
    border: none;
    color: var(--brown);
    font-size: 15px;
    cursor: pointer;
  }
`

const ToDoLabel = styled.label `
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`

const StyledParagraph = styled.p `
  width: 100%;
  font-size: 14px;
  margin-bottom: 0;
`


const ToDos = () => {
  const tasks = useSelector((state) => state.todos.items)
  const dispatch = useDispatch()

  const trashCanIcon = <FontAwesomeIcon icon={faTrashAlt} />
  /* const editIcon = <FontAwesomeIcon icon={faPen} /> */

  const onToggleIsComplete = (id) => {
    dispatch(todos.actions.toggleIsComplete(id))
  }

  return (
    <ContainerDiv>
      {tasks.map((task) => (
        <StyledForm 
          key={task.id}
          category={task.category}
          completed={task.isComplete}
        >
          <ToDoLabel
            completed={task.isComplete} 
            htmlFor='completed'>{task.task}
          </ToDoLabel>
          <div>
            <input 
              id='completed'
              type='checkbox' 
              onChange={() => onToggleIsComplete(task.id)}
            />
            {/* <button >{editIcon}</button> */}
            <button onClick={() => dispatch(todos.actions.removeToDo(task.id))}>{trashCanIcon}</button>
          </div>
          <StyledParagraph>{moment(task.newDate).format("D. MM. YYYY")}</StyledParagraph> 
        </StyledForm>
      ))}
    </ContainerDiv>
  )
}

export default ToDos
