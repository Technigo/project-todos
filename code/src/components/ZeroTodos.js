import React from 'react';
import styled from 'styled-components';

const ZeroTodos = () => {

  return (
    <ZeroTodosContainer>
      <img src="./assets/doubletick.png" alt="A doubletick"/>
      <ZeroTodosHeading>No tasks!</ZeroTodosHeading>
      <ZeroTodosInfoText>
        Add some new tasks and click the button below.
      </ZeroTodosInfoText>
    </ZeroTodosContainer>
  )
}

// Local styling
const ZeroTodosContainer = styled.div`
  margin: 40px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  color: #3b3d40;
`;

const ZeroTodosHeading = styled.h2`
`;

const ZeroTodosInfoText = styled.p`
  text-transform: uppercase; 
  font-size: 12px;
`;

export default ZeroTodos
