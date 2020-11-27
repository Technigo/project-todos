import React from 'react'
import styled from 'styled-components/'

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  padding: 20px;
  color: #dcd7e1;
  font-size: 20px;
  border-bottom: 1px solid #dcd7e1;
`;

const PlusSign = styled.button`
  font-size: 30px;
  font-weight: bold;
  justify-self: center;
  margin: 0;
  border: none;
  background: none;
`;

const InputText = styled.input`
  margin: 0;
  border: none;
  font-size: inherit;
`;


export const Input = () => {
  return (
    <form>
      <InputContainer>
        <PlusSign type="submit">+</PlusSign>
        <InputText
          type="text"
          placeholder="Enter new task"
        />
      </InputContainer>
    </form>
  )
}