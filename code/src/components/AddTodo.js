import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'

export const AddTodo = () => {
  const [input, setInput] = useState('')
  const [category, setCategory] = useState('')
  const [showForm, setShowForm] = useState(false)

  const categories = ['business', 'personal', 'shopping']

  const onShowForm = () => {
    setShowForm(true)
  }

  const dispatch = useDispatch()

  const onAddTodo = (event) => {
    // event.preventDefault()
    dispatch(todos.actions.addTodo({ input, category }))
    setShowForm(false)
    setInput('')
    // console.log('input: ', input)
    // console.log('category: ', category)
  }

  return (
    <StyledContainer>
      {!showForm && (
        <button onClick={() => onShowForm()}>
          <StyledSmallHeadline>Add new to-do</StyledSmallHeadline>
        </button>
      )}
      {showForm && (
        <div>
          <StyledSmallHeadline>Add new to-do</StyledSmallHeadline>

          <StyledForm>
            <StyledTextInput
              type="text"
              value={input}
              placeholder="Type here..."
              onChange={(event) => {
                setInput(event.target.value)
              }}
            />
            <StyledButton
              type="submit"
              disabled={input === ''}
              onClick={onAddTodo}>
              +
            </StyledButton>
            {categories.map((item) => (
              <label key={item} htmlFor={item}>
                <input
                  type="radio"
                  id={item}
                  name="category"
                  value={item}
                  onChange={(event) => setCategory(event.target.value)}
                />
                <span className="span">{item}</span>
              </label>
            ))}
          </StyledForm>
        </div>
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
  border-bottom: 1px solid #9aaedb;
`
const StyledTextInput = styled.input`
  background: transparent;
  background-color: #21274e;
  border: none;
  padding: 10px;
  border-radius: 10px;
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

  input {
    display: none;
  }

  input:hover + span {
    background-color: #21274e;
    border: 1px solid #21274e;
    color: white;
  }

  input:checked + span {
    background-color: #21274e;
    border: 1px solid tomato;
    color: white;
  }

  span {
    color: #9aaedb;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    border: 1px solid #9aaedb;
    padding: 6px 10px;
    border-radius: 8px;
  }
`

const StyledButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  color: white;
  border-radius: 100px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: #21274e;
`

const StyledSmallHeadline = styled.h3`
  color: #9aaedb;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 25px 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
