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
  position: relative;
  border: none;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background};
  font-size: 40px;
  padding: 0;
  border: 3px solid transparent;
  box-shadow:
      3px 3px 6px 3px rgba(0, 0, 0, 0.1),
      -3px -3px 3px 3px rgba(247, 251, 255, 0.5),
      3px 3px 8px 2px rgba(0, 0, 0, 0) inset,
      -3px -3px 7px 2px rgba(247, 251, 255, 0) inset;
  color: ${props => props.theme.colors.boxshadow};
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-stroke: 1px solid #7989A4;
  transition: border 0.1s ease, box-shadow 0.1s ease, color 0.1s ease, text-stroke 0.1s ease;
  outline: none;
    
    &:active {
      box-shadow:
          3px 3px 6px 3px rgba(0, 0, 0, 0),
          -3px -3px 3px 3px rgba(247, 251, 255, 0),
          3px 3px 8px 2px rgba(0, 0, 0, 0.1) inset,
          -3px -3px 7px 2px rgba(247, 251, 255, 0.7) inset;
    ${'' /* outline-color: ${props => props.theme.colors.orange}; */}
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
      <Label aria-hidden={true} name="add">Add input</Label>
      <Input type="text" for="add" value={text} onChange={handleChange} placeholder="Add task" required />
      <Button type="submit"><span>+</span></Button>
    </Wrapper>
  )
}

export default connect(
  null,
  mapDispatch
)(AddTask)