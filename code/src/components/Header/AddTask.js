import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../reducers/TasksSlice' 
import styled from 'styled-components'

const Wrapper = styled.form `
  width: 66%;
  border: 1px solid blue;
  display: flex;
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
      <label>Add input</label>
      <input type="text" value={text} onChange={handleChange} required />
      <button type="submit">Add</button>
    </Wrapper>
  )
}

export default connect(
  null,
  mapDispatch
)(AddTask)