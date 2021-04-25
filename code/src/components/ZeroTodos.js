import React from 'react';
import styled from 'styled-components';

const ZeroTodos = () => {

  return (
    <ZeroTodosContainer> 
      <DoubleTick src="./assets/doubletick.png" alt="A doubletick that rotates one circle"></DoubleTick>
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
  position: relative; 
`;

const DoubleTick = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: -40px;
  transform-origin:110% center; 
  animation:rotate 4s linear;
  @keyframes rotate { 100% { transform:rotate(-360deg); } }
`; 

const ZeroTodosHeading = styled.h2`
`;

const ZeroTodosInfoText = styled.p`
  text-transform: uppercase; 
  font-size: 12px;
`;

export default ZeroTodos
