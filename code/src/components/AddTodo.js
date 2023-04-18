import React, { useState } from 'react';
import styled from 'styled-components'

const AddTodo = () => {
  const [input, setInput] = useState('');

  return (
    <StyledMainDiv>

      <StyledP>Add task</StyledP>
      <TextInput
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)} />{' '}
    </StyledMainDiv>
  )
}

const StyledMainDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
background: transparent;
border: 1 px solid #fff;
height: 200px;
width: 300px;
border: 1px solid red;
`

const TextInput = styled.input`
font-family: 'Gaegu';
font-size: 16px;
background-color: white;
margin: 0;
border-bottom: 2px dashed;
`
export const StyledP = styled.p`
font-family: 'Gaegu';
font-weight: bold;
font-size: 20px;
display: inline-block;
`
export default AddTodo;