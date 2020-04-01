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
  border: none;
  box-shadow: none;
  border-bottom: 1px solid ${props => props.theme.colors.black};
  font-size: 20px;
  outline-color: ${props => props.theme.colors.orangered};
  width: 80%;
  margin-bottom: 10px;

  &:focus, &:active {
    outline-color: ${props => props.theme.colors.orange};
  }
`;

const Label = styled.label`
  display: none;
`;

const Button = styled.button`
  position: relative;
  border: none;
  box-shadow: none;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-size: 40px;
  padding: 0;
  cursor: pointer;

  &:focus, &:active {
    outline-color: ${props => props.theme.colors.orange};
  }

    span {
      position: absolute;
      top: 43%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
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
      <Label aria-hidden={true}>Add input</Label>
      <Input type="text" value={text} onChange={handleChange} placeholder="Add task" required />
      <Button type="submit"><span>+</span></Button>
    </Wrapper>
  )
}

export default connect(
  null,
  mapDispatch
)(AddTask)