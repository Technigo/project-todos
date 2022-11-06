/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { NewTodoButton, ButtonP, AddButton } from 'styles/Buttons';
import { SrOnly } from 'styles/GlobalStyles'
import todos from '../reducers/todos'
import Pen from '../images/PenIcon.png'
import Clock from '../images/Clock.png'

const NewTodo = () => {
  const [name, setName] = useState('')
  const [urgency, setUrgency] = useState('')
  const [collapsed, setCollapsed] = useState(false)

  const dispatch = useDispatch()

  // Setting the collapse/de-collapse of the Add a To do-section
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  // Handling the new To dos.
  const HandleSubmit = (event) => {
    event.preventDefault()

    dispatch(todos.actions.addToDo({
      name,
      id: Date.now(),
      completed: false,
      urgency }))

    setName('')
    toggle()
  }

  return (
    <NewToDoContainer>
      <NewTodoButton onClick={toggle} className={collapsed ? 'invisible' : 'visible'} type="button"><ButtonP>{collapsed ? '-' : '+'}</ButtonP></NewTodoButton>
      {collapsed && (
        <ToDoWrapper>
          <form>
            <label htmlFor="new-todo"><SrOnly> New to-do </SrOnly></label>
            <NewToDoInput
              type="text"
              value={name}
              name="new-todo"
              placeholder="New to-do"
              required
              onChange={(event) => setName(event.target.value)} />
            <label>
              <SrOnly>Category:</SrOnly>
              <UrgencySelect
                value={urgency}
                required
                onChange={(event) => setUrgency(event.target.value)}>
                <option style={{ display: 'none' }}>Category</option>
                <option value="red">Urgent</option>
                <option value="orange">Less urgent</option>
                <option value="green">Not urgent</option>
              </UrgencySelect>
            </label>
            <AddButton type="submit" onClick={HandleSubmit}>Add</AddButton>
          </form>
        </ToDoWrapper>
      )}
    </NewToDoContainer>
  )
}

export default NewTodo

const NewToDoContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`
const ToDoWrapper = styled.section`
  background-color: rgb(255, 69, 117);
  padding: 20px;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 10vh;
  box-sizing: border-box;
  width: 80%;
  height: 25vh;
  z-index: 1;
  
  @media (min-width: 668px) and (max-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1025px){ 
    width: 50%;
  }
  @media (min-width: 1600px) {
    width: 50%;
  }
`
const UrgencySelect = styled.select`
  width: 100%;
  padding: 5px 30px 5px 30px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin: 2px;
  background-image: url(${Clock});
  background-position:left;
  background-size: 22px;
  background-repeat: no-repeat;
  font-family: 'Indie Flower', cursive;
  font-size: 18px;
`
const NewToDoInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url(${Pen});
  background-position:left;
  background-size: 22px;
  background-repeat: no-repeat;
  padding: 5px 30px 5px 30px;
  margin: 2px;
  font-family: 'Indie Flower', cursive;
  font-size: 18px;
`