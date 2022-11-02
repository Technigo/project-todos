/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import styled from 'styled-components';

import tasks from 'reducers/task';

const Wrapper = styled.div`
/* background-color:#ffadad; */
height: 100%;
`

const Form = styled.form`
/* background-color:#ffadad; */
display: flex;
flex-direction: column;
padding: 10px;
margin-top: 40px;

button{
  border: 1px solid goldenrod;
  margin: 30px auto;

}
`
const Input = styled.input`
width: 100%;
padding: 20px;
margin: 10px auto;

`
const AddTask = () => {
  const [inputValue, setInputValue] = useState('')
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()

    const newTask = {
      id: uniqid(),
      name: inputValue,
      description: value,
      isDone: false
    }

    dispatch(tasks.actions.addItem(newTask))

    setInputValue('')
    setValue('')
  }

  return (
    <Wrapper>
      <Form onSubmit={onFormSubmit}>
        <Input
          type="text"
          placeholder="Title"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
        <Input
          type="text"
          placeholder="Description"
          value={value}
          onChange={(e) => setValue(e.target.value)} />
        <button type="submit">submit</button>
      </Form>
    </Wrapper>
  )
}

export default AddTask

