import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FaTrashAlt, FaEdit, FaRegWindowClose, FaCheck } from 'react-icons/fa'

import { tasks } from '../reducers/tasks'

//Styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 50px;
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
              color="#ca8a8b" 
              size="20px" 
            />
          </Btn>
          <Btn 
            type="button" 
            onClick={() => dispatch(tasks.actions.toggleEdit(id))}
          >
            <FaRegWindowClose 
              color="#ca8a8b" 
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
              color="#ca8a8b"  
              size="20px" 
            />
          </Btn>
          <Btn 
            type="button" 
            onClick={() => onDeleteTodo(id)}
          >
            <FaTrashAlt 
              color="#ca8a8b"
              size="18px"
            /> 
          </Btn>
        </>
      )}  
    </Wrapper>
  )
}

export default TodoItemBtns