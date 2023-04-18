import React from 'react';
import styled from 'styled-components'

const AddTodo = () => {
  return (
    <StyledMainDiv>
      <TextInput type="text" />
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
`

const TextInput = styled.input`
font-family: 'Gaegu';
font-size: 20px;
background-color: white;
margin: 0;
`

export default AddTodo;