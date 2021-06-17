import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'

import todos from 'reducers/todos'

const Input = () => {

  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

    const newToDo = {
      id: uuidv4(),
      description: value,
      time: Date.now(),
      isComplete: false
    };
    dispatch(todos.actions.addToDo(newToDo))
    setValue('')
  }

  return (
    <>
      <ButtonContainer>
        <DoneUndoneWrapper>
          <DoneUndoneButton
            type='button'
            onClick={() => dispatch(todos.actions.allDone())}>
              All done
          </DoneUndoneButton>
          <DoneUndoneButton
            type='button'
            onClick={() => dispatch(todos.actions.allUndone())}>
              Reset
          </DoneUndoneButton>
        </DoneUndoneWrapper>
        <ClearAllButton
          type='button'
          onClick={() => dispatch(todos.actions.clearAll())}>
            Remove all
        </ClearAllButton>
      </ButtonContainer>

      <Form onSubmit={onFormSubmit}>
        <Label htmlFor='task'>
          <FormInput
            type='text'
            onChange={e => setValue(e.target.value)}
            value={value}
            id='task'
            name='task'
            minLength='4'
            maxLength='140'
            required
            placeholder='Set auto reply on job email...'
          />
        </Label>
        <SubmitButton type='submit'>
          Add to planner
        </SubmitButton>
      </Form>
    </>
  )
}

export default Input

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80%;
  padding: 20px 0;
  background-color:  #5f939a;
  margin: auto;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 40%;
    padding: 10px 0;
  }
`
const DoneUndoneWrapper = styled.div`
  display: flex;
  align-items: center;
`
const DoneUndoneButton = styled.button`
  background-color: #d8ac9c;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  border: solid #eac8af 1.8px;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  box-shadow: 1px 2px 2px #646666;
  margin: 0 10px;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`
const ClearAllButton = styled.button`
  justify-self: flex-end;
  background-color: #d8ac9c;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  border: solid #eac8af 1.8px;
  border-radius: 20%;
  width: 75px;
  height: 55px;
  box-shadow: 1px 2px 2px #646666;
  margin: 0 10px;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Label = styled.label`
  width: 80%;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
`
const FormInput = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: #1b2021;
  width: 100%;
  height: 60px;
  border: none;
  background-color: white;
  padding: 5px 10px;
  &::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #1b2021;
    font-style: italic;
    padding-left: 8px;
  }
  &:focus::placeholder {
    color: transparent;
  }
  @media (min-width: 768px) {
    height: 70px;
    font-size: 20px;
    &::placeholder {
      font-size:20px;
    }
  }
`
const SubmitButton = styled.button`
  width: 80%;
  height: 60px;
  background-color:#1B2021;
  border: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 22px;
  color: white;
  &:hover {
    cursor: pointer;
  }
    @media (min-width: 768px) {
      width: 60%;
      height: 80px;
      font-size: 30px;
    }
    @media (min-width: 1024px) {
      width: 40%;
      height: 70px;
    }
`