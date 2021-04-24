import React from 'react';
import styled from 'styled-components'; 
import { AiFillSave } from 'react-icons/ai';

const Button = styled.button`
  background: transparent;
  color: #ea9a96;
  border: none;
  font-size: 25px;
  padding: 0;
  margin-left: 5px;

  
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

  const SaveButton = ({ onSaveEditedContent }) => {
  return (
    <Button onClick={onSaveEditedContent}>
      <AiFillSave />
    </Button>
  );
};

export default SaveButton;
