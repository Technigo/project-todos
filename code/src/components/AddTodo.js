import React, { useState } from 'react'
import uniqid from 'uniqid'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import todos from 'reducers/todos'

const TodoWrapper = styled.div`
  padding: 5px 10px;

  @media (min-width: 767px){
    padding: 20px 48px;
  }
  @media (min-width: 1024px){
    width: 700px;
    margin: auto;
    padding: 20px 0;
  }
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
const AddButton = styled.button`
  background-color: yellow;
  border: none;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  padding: 1px 0 0 0.5px;

  @media (min-width: 767px){
    height: 60px;
    width: 60px;
    font-size: x-large;
  }
  @media (min-width: 1024px){
    height: 40px;
    width: 40px;
    font-size: large;
  }
`
const Input = styled.input`
  font-size: 18px;
  font-family: 'Montserrat';
  border: none;
  width: 90%;
  height: 50px;
  background-color: #FFF;
  margin-left: 10px;
  outline: none;

  @media (min-width: 767px){
    font-size: 20px;
    margin-left: 40px;
  }
  @media (min-width: 1024px){
    width: 85%;
  }
`

const AddTodo = () => {
  
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: uniqid(),
      text: value,
      isComplete: false
    }
    dispatch(todos.actions.addTodo(newTodo))
    setValue('')
  }

  return (
    <TodoWrapper>
      <Form onSubmit={onFormSubmit}>
        <AddButton type="submit">
          <i className="fas fa-plus"></i>
        </AddButton>
        <label htmlFor="new-task"></label>
        <Input 
          value={value}
          onChange={e => setValue(e.target.value)}
          maxLength='120'
          placeholder="Add to-do"
        />
      </Form>
    </TodoWrapper>
  )
}

export default AddTodo
