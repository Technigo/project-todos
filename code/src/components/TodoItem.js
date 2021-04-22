import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { FaTrashAlt, FaEdit, FaRegWindowClose, FaCheck } from 'react-icons/fa'

import TodoItemBtns from './TodoItemBtns'
import { tasks } from '../reducers/tasks'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #A9A4A6; 
  border-top: 1px solid #A9A4A6;
  font-family: 'Montserrat', sans-serif;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
`

const Input = styled.input`
  height: 35px;
  width: 35px;
  z-index: 1;
  opacity: 0;
  cursor: pointer;
`

const Indicator = styled.div`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  margin-left: 5px;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #8B98F9;
  
  &::before {
    content: '';
    width: 35px;
    height: 35px;
    position: absolute;
    border-radius: 50%;
    background-color: #8B98F9;
    display: none;
    top: -1.5px;
    left: -2px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 16px;
    border: solid #fff;
    border-width: 0 4px 4px 0;
    top: 4px;
    left: 10px;
    transform: rotate(45deg);
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
  }

  ${Input}:checked + &::before {
    display: block;
  }
`

const Description = styled.p`
  font-size: 20px;
  width: 60%;
  margin-left: 10px;
`

const TodoInput = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 5px;
  width: 80%;
  height: 38px;
  border: none;
  border-bottom: 2px solid #8B98F9;
  margin-left: 10px;
  font-size: 20px;
`

const Date = styled.span`
  font-size: 12px;
`

const TodoItem = ({ id, text, complete, created, editMode }) => {
  const [description, setDescription] = useState(text)
  const dispatch = useDispatch()
  const taskCreated = moment(created).format('MMM Do')

  const onInputChange = (event) => {
    setDescription(event.target.value)
  }

  const onSaveEdit = () => {
    dispatch(tasks.actions.editItemDescription({id: id, description: description}))
  }

  return (
    <Container key={id}>

      <Input
        type="checkbox"
        checked={complete}
        onChange={() => dispatch(tasks.actions.toggleComplete(id))}
      />
      <Indicator />
      {editMode ? <TodoInput type="text" value={description} onChange={onInputChange}/> : <Description>{text}</Description>}
      
      <Wrapper>
        <TodoItemBtns id={id} editMode={editMode} onSaveEdit={onSaveEdit} />
        <Date>{taskCreated}</Date>
      </Wrapper>

    </Container>
  )     
}

export default TodoItem
