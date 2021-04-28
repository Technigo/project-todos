import React from 'react'; 
import styled from 'styled-components'; 

const ErrMessage = styled.p`
  font-size: 16px;
  color: #9A0026;

  @media (min-width: 768px) {
    font-size: 20px;
  }
  
  @media (min-width: 1200px) {
    font-size: 28px;
  }
`

const ErrorMessage = ({ errorMessage }) => {
  return (
    <ErrMessage>{errorMessage}</ErrMessage>
  );
};

export default ErrorMessage;