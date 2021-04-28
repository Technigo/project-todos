import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FaTrashAlt, FaEdit, FaRegWindowClose, FaCheck } from 'react-icons/fa'

import { tasks } from '../reducers/tasks'

//Styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-evenly;
`

const Btn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
`

const TodoItemBtns = ({ id, editMode, onSaveEdit }) => {

  const dispatch = useDispatch()

  const onDeleteTodo = () => {
    dispatch(tasks.actions.removeTodo(id))
  } 

  return (
    <Wrapper>
      {editMode && (
        <>
          <Btn 
            type="button" 
            onClick={onSaveEdit}
          >
            <FaCheck 
              color="#8B98F9" 
              size="20px" 
            />
          </Btn>
          <Btn 
            type="button" 
            onClick={() => dispatch(tasks.actions.toggleEdit(id))}
          >
            <FaRegWindowClose 
              color="#8B98F9" 
              size="20px" 
            />
          </Btn>
        </>
      )}
      {!editMode && (
        <>
          <Btn 
            type="button" 
            onClick={() => dispatch(tasks.actions.toggleEdit(id))}
          >
            <FaEdit 
              color="#8B98F9"  
              size="20px" 
            />
          </Btn>
          <Btn 
            type="button" 
            onClick={() => onDeleteTodo(id)}
          >
            <FaTrashAlt 
              color="#8B98F9"
              size="18px"
            /> 
          </Btn>
        </>
      )}  
    </Wrapper>
  )
}

export default TodoItemBtns