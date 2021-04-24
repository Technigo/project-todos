import React from 'react'; 
import styled from 'styled-components'; 

const ErrMessage = styled.p`
  font-size: 16px;
  color: #303960;
`

const ErrorMessage = ({ errorMessage }) => {
  return (
    <ErrMessage>{errorMessage}</ErrMessage>
  );
};

export default ErrorMessage;