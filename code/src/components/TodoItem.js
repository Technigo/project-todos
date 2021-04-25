import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

import { tasks, fetchData } from '../reducers/tasks'

import TodoItemBtns from './TodoItemBtns'
import CustomCheckbox from './CustomCheckbox'

//Styled components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 50px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
  font-family: 'Montserrat', sans-serif;
  margin: 10px 0;
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
  border-bottom: 1px solid #8B98F9;
  border-radius: 4px;
  background-color: #fcfcfc;
  margin-left: 10px;
  font-size: 20px;
`

const Date = styled.span`
  font-size: 12px;
`

const TodoItem = ({ id, text, complete, editMode, dueDate, description, setDescription }) => {
  const dispatch = useDispatch()
  const taskDueDate = moment(dueDate).format('MMM Do')

  const onInputChange = (event) => {
    setDescription(event.target.value)
  }

  const onSaveEdit = () => {
    dispatch(tasks.actions.editItemDescription({ id: id, description: description }))
    setTimeout(dispatch(fetchData()), 2000)
  }

  const onToggleComplete = () => {
    dispatch(tasks.actions.toggleComplete(id))
    setTimeout(dispatch(fetchData()), 2000)
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
