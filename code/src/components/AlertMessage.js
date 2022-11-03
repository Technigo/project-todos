/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

export const AlertMessage = () => {
  return (
    <StyledAlertMessage>
      <h2>Congratulation you checked all tasks for today!
            You deserve rest!
      </h2>
    </StyledAlertMessage>

  )
}

const StyledAlertMessage = styled.div`
width: 20vw;
height:20vh;
background-color: beige;
`