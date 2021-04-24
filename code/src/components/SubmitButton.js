import React from 'react';
import styled from 'styled-components'; 
import { AiFillPlusCircle } from 'react-icons/ai';

const Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  margin-right: 15px;
  font-size: 50px;
  border: none;
  color: #ea9a96;
  padding: 0;

  
  @media (min-width: 768px) {
    font-size: 60px;
  }
`;

const SubmitButton = () => {
  return (
    <Button type="submit">
      <AiFillPlusCircle />
    </Button>
  );
};

export default SubmitButton;