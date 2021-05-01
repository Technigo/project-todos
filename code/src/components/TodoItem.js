import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import { tasks } from '../reducers/tasks'

import TodoItemBtns from './TodoItemBtns'
import CustomCheckbox from './CustomCheckbox'

//Styled components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
  font-family: 'Montserrat', sans-serif;
  margin: 10px 0;
  background-color: #ffffff;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: 5px;
`

const Description = styled.p`
  font-size: 18px;
  width: 60%;
  margin-left: 10px;
`

const TodoInput = styled.input`
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 5px;
  width: 60%;
  height: 38px;
  border: none;
  border-bottom: 1px solid #ca8a8b;
  border-radius: 4px;;
  margin-left: 10px;
  font-size: 18px;
`

const Date = styled.span`
  font-size: 12px;
`

const TodoItem = ({ id, text, complete, editMode, dueDate }) => {
  const [description, setDescription] = useState(text)
  const dispatch = useDispatch()
  const taskDueDate = moment(dueDate).format('MMM Do')

  const onInputChange = (event) => {
    setDescription(event.target.value)
  }

  const onSaveEdit = () => {
    dispatch(tasks.actions.editItemDescription({ id: id, description: description }))
  }

  const onToggleComplete = () => {
    dispatch(tasks.actions.toggleComplete(id))
  }

  return (
    <Container>
      <CustomCheckbox
        complete={complete}
        onToggleComplete={onToggleComplete}
      />
      {editMode ? <TodoInput type="text" value={description} onChange={onInputChange}/> : <Description>{text}</Description>}
      <Wrapper>
        <TodoItemBtns 
          id={id} 
          editMode={editMode} 
          onSaveEdit={onSaveEdit} 
        />
        <Date>{taskDueDate}</Date>
      </Wrapper>
    </Container>
  )     
}

export default TodoItem
