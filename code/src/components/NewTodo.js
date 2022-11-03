/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { NewTodoButton, ButtonP, AddButton } from 'styles/Buttons';
import { SrOnly } from 'styles/GlobalStyles'
import todos from '../reducers/todos'

const NewTodo = () => {
// Local states
  const [name, setName] = useState('')
  const [urgency, setUrgency] = useState('')
  const [collapsed, setCollapsed] = useState(false)

  const dispatch = useDispatch()

  // a function for dealing with new todos
  const HandleSubmit = (event) => {
    event.preventDefault()

    dispatch(todos.actions.addToDo({
      name,
      id: Date.now(),
      completed: false,
      urgency }))

    setName('')
  }

  // a function that steers the de-collapsing of the New-to-Do-section.
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <section>
      <NewTodoButton onClick={toggle} type="button"><ButtonP>{collapsed ? '-' : '+'}</ButtonP></NewTodoButton>
      {collapsed && (
        <ToDoWrapper>
          <form>
            <label htmlFor="new-todo"><SrOnly> New to-do </SrOnly></label>
            <input
              type="text"
              value={name}
              name="new-todo"
              placeholder="New to-do"
              onChange={(event) => setName(event.target.value)} />
            <label>
              <SrOnly>Category:</SrOnly>
              <UrgencySelect
                value={urgency}
                onChange={(event) => setUrgency(event.target.value)}>
                <option style={{ display: 'none' }}>Choose a category</option>
                <option value="red">Do it ASAP</option>
                <option value="orange">Can wait a little</option>
                <option value="green">Just do it when you have time</option>
              </UrgencySelect>
            </label>
            <AddButton type="submit" onClick={HandleSubmit}>Add</AddButton>
          </form>
        </ToDoWrapper>
      )}

    </section>
  )
}

export default NewTodo

const ToDoWrapper = styled.section`
    background-color: #678A74;
    padding: 10px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    position: relative;
`
const UrgencySelect = styled.select`

`