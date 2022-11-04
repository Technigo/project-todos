import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom'
// import { OuterWrapper } from 'components/GlobalStyles';

export const StartPage = () => {
  return (
    <InnerWrapper>
      <h1>Welcome</h1>
      <h3>This app help you organize:</h3>
      <h3>- All those ideas you want to remember for later </h3>
      <h3>- And all the tasks you rather forget but still need to do.</h3>
      <h2>Is it time for work or play?</h2>
      <ButtonContainer>
        <Link to="/needtodo">
          <Buttons type="button">Need To Dos</Buttons>
        </Link>
        <Link to="/wanttodo">
          <Buttons type="button">Want to dos</Buttons>
        </Link>
      </ButtonContainer>
    </InnerWrapper>
  )
}

const InnerWrapper = styled.section`
display: flex;
width: 90%;
flex-direction: column;
align-items: center;

h1 {
  color: #ff999b;
  font-size: 1.5rem;
}

h2 {
  color: #ff999b;
  font-size: 1.5rem;
  margin-bottom: 30px;
}

h3 {
  color: #ff7ab8;
  font-weight: normal;
  width: 70%;
}

`

const ButtonContainer = styled.div`
display: flex;
justify-content: space-around;
width: 100%;

`

const Buttons = styled.button`
background-color:#424242;
color: #ffbe91;
width: 100%;
border: none;
border-radius: 20px;
font-size: 1rem;
letter-spacing: .15rem;
padding: 0.5rem 1rem;
box-shadow: 3px 3px 10px #ffbe91, -3px -3px 10px #ffbe91;

&:hover{
  color: #ff7ab8;
  box-shadow: 3px 3px 10px #ff7ab8, -3px -3px 10px #ff7ab8;
  cursor: pointer;
}

`
