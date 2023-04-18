import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const AddTodo = () => {
  const [input, setInput] = useState('')
  // const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatchEvent(todos.actions.addTodo(input));
  };

  return (
    <StyleMainDiv>
      <TextInput
        type="text"
        value={input}
        onChange={(event) => setInput(event.targe.value)} />{' '}
      <button type="submit" onClick={onAddTodo}>Submit</button>{' '}
    </StyleMainDiv>
  );
};

const StyleMainDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
background: transparent;
border: 1 px solid #fff;
height: 200px;
width: 300px;
`

const TextInput = styled.input`
font-family: 'Gaegu';
font-size: 20px;
background-color: white;
margin: 0;
`

export default AddTodo