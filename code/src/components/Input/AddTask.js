import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../reducers/TasksSlice' 
import styled from 'styled-components'

const Wrapper = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  background-color: ${props => props.theme.colors.background};
  border: none;
  box-shadow: none;
  border-bottom: 1px solid ${props => props.theme.colors.boxshadow};
  font-size: 20px;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 50px;
  outline: none;
  }
`;

const Label = styled.label`
  display: none;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  font-size: 40px;
  border-radius: 50%;
  margin-top: 20px;
`;

const mapDispatch = { addTask }

const AddTask = ({ addTask }) => {

  const [text, setText] = useState('')

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask( text )
    setText('')
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Label aria-hidden={true} name="add">Add input</Label>
      <Input type="text" htmlFor="add" value={text} onChange={handleChange} placeholder="Add task" required />
      <Button type="submit"><span>+</span></Button>
    </Wrapper>
  )
}

export default connect(
  null,
  mapDispatch
)(AddTask)