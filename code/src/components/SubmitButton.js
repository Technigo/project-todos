import React from 'react';
import styled from 'styled-components'; 

const Button = styled.button`
  background: transparent;
`;

const SubmitButton = () => {
  return (
    <Button
      type="submit"
    >
      +
    </Button>
  );
};

export default SubmitButton;