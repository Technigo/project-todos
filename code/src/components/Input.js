import React from 'react'
import styled from 'styled-components/'

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: baseline;
  padding: 20px 20px 30px 20px;
  color: #dcd7e1;
  font-size: 20px;
  border-bottom: 1px solid #dcd7e1;
`;

const PlusSign = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`;

const InputText = styled.p`
  margin: 0;
`;


export const Input = () => {
  return (
    <InputContainer>
      <PlusSign>+</PlusSign>
      <InputText>Add task</InputText>
    </InputContainer>
  )
}