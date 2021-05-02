import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { IoTrashBinOutline } from 'react-icons/io5'
import { AiOutlineEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

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
  color: #ca8a8b;
  font-size: 22px;

  &:hover {
    color: #D6A1A2;
  }
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
            <AiOutlineCheck />
          </Btn>
          <Btn 
            type="button" 
            onClick={() => dispatch(tasks.actions.toggleEdit(id))}
          >
            <AiOutlineClose />
          </Btn>
        </>
      )}
      {!editMode && (
        <>
          <Btn 
            type="button" 
            onClick={() => dispatch(tasks.actions.toggleEdit(id))}
          >
            <AiOutlineEdit />
          </Btn>
          <Btn 
            type="button" 
            onClick={() => onDeleteTodo(id)}
          >
            <IoTrashBinOutline /> 
          </Btn>
        </>
      )}  
    </Wrapper>
  )
}

export default TodoItemBtns