import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FaTrashAlt, FaEdit, FaRegWindowClose, FaCheck } from 'react-icons/fa'

import { tasks } from '../reducers/tasks'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Btn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const TodoItemBtns = ({ id, editMode, onSaveEdit }) => {

  const dispatch = useDispatch()

  return (
    <Wrapper>
      {editMode && (
        <>
          <Btn type="button" onClick={onSaveEdit}>
            <FaCheck color="#8B98F9" size="25px" />
          </Btn>
          <Btn type="button" onClick={() => dispatch(tasks.actions.toggleEdit(id))}>
            <FaRegWindowClose color="#8B98F9" size="25px" />
          </Btn>
        </>
      )}
      {!editMode && (
        <>
          <Btn type="button" onClick={() => dispatch(tasks.actions.toggleEdit(id))}>
            <FaEdit color="#8B98F9" size="28px" />
          </Btn>
          <Btn type="button" onClick={() => dispatch(tasks.actions.removeTodo(id))}>
            <FaTrashAlt color="#8B98F9"size="25px"/> 
          </Btn>
        </>
      )}  
    </Wrapper>
  )
}

export default TodoItemBtns