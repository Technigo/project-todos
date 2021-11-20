import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'

export const AddTodo = () => {
  const [input, setInput] = useState('')
  const [category, setCategory] = useState('')
  const [showForm, setShowForm] = useState(false)

  const toggleShowForm = () => {
    if (showForm) {
      setShowForm(false)
    } else {
      setShowForm(true)
    }
  }

  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo({ input, category }))
    setShowForm(true)
    setInput('')
  }

  return (
    <StyledContainer>
      {!showForm && (
        <AddContainer>
          <AddButton onClick={() => toggleShowForm()}>
            <ButtonTitle>Add new to-do</ButtonTitle>
            <i className="fas fa-chevron-down"></i>
          </AddButton>
        </AddContainer>
      )}
      {showForm && (
        <AddContainer>
          <AddButton onClick={() => toggleShowForm()}>
            <ButtonTitle>Add new to-do</ButtonTitle>
            <i className="fas fa-chevron-up"></i>
          </AddButton>

          <StyledForm>
            <StyledTextInput
              type="text"
              value={input}
              placeholder="Type here..."
              onChange={(event) => {
                setInput(event.target.value)
              }}
            />

            <IconContainer>
              <StyledSmallHeadline>Category:</StyledSmallHeadline>
              <label htmlFor="personal">
                <input
                  type="radio"
                  id="personal"
                  name="category"
                  value="personal"
                  onChange={(event) => setCategory(event.target.value)}
                />
                <span className="span">
                  <i className="fas fa-user"></i>
                </span>
              </label>
              <label htmlFor="business">
                <input
                  type="radio"
                  id="business"
                  name="category"
                  value="business"
                  onChange={(event) => setCategory(event.target.value)}
                />
                <span className="span">
                  <i className="fas fa-briefcase"></i>
                </span>
              </label>
              <label htmlFor="shopping">
                <input
                  type="radio"
                  id="shopping"
                  name="category"
                  value="shopping"
                  onChange={(event) => setCategory(event.target.value)}
                />
                <span className="span">
                  <i className="fas fa-shopping-basket"></i>
                </span>
              </label>
            </IconContainer>
            <StyledButton
              type="submit"
              disabled={input === ''}
              onClick={onAddTodo}>
              <i className="fas fa-plus"></i>
            </StyledButton>
          </StyledForm>
        </AddContainer>
      )}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
  border-bottom: 1px dashed #9aaedb;
`
const StyledTextInput = styled.input`
  width: 100%;
  background: transparent;
  background-color: #21274e;
  border: 1px solid #9aaedb;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  color: white;
  font-size: 16px;

  &::placeholder {
    color: #9aaedb;
  }
`
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  margin: 15px 0 5px 0;
  color: white;

  input[type='radio'] {
    display: none;
  }

  input:checked + span {
    background-color: #21274e;
    color: white;
  }

  label {
    width: 35px;
    height: 35px;
    color: #9aaedb;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-left: 8%;
  }

  .fa-user:hover {
    color: tomato;
  }
  .fa-shopping-basket:hover {
    color: limegreen;
  }
  .fa-briefcase:hover {
    color: dodgerblue;
  }
`

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  color: white;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  border: 2px solid white;
`

const StyledSmallHeadline = styled.h3`
  color: #9aaedb;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 0;
`
const AddContainer = styled.div`
  padding: 10px 15px;
  color: #9aaedb;
  background-color: #21274e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`
const AddButton = styled.button`
  width: 100%;
  height: 25px;
  border: none;
  color: #9aaedb;
  background-color: #21274e;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ButtonTitle = styled.p`
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 0;
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  color: #9aaedb;
`
