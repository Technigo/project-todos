import React, { useState } from 'react';
import styled from 'styled-components';
import TaskList from './TaskList';

export const StartContainer = styled.div`
width: 375px;
margin: 0px auto;
margin-top: 5%;
margin-bottom: 10%;
display: flex;
flex-direction: column;
align-items: center;
border: 8px solid;
border-image: linear-gradient(45deg, #B1C2DD, #E3E3E3, #DDF2FD, #B1C2DD) 1;
padding: 4% 10% 10% 10%;
`

export const StartTitle = styled.h1`
font-size: 35px;
text-align: center;
font-family: 'Merriweather';
margin: 0px auto;
margin-top: 10%;
color: #39739d;
`

export const StartButton = styled.button`
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  display: inline-block;
  font-family: 'Merriweather';
  font-size: 15px;
  font-weight: 400;
  line-height: 1.15385;
  margin-top: 10%;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

&:hover,
&:focus {
  background-color: #b3d3ea;
  color: #2c5777;
}

&:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

&:active {
  background-color: #a0c7e4;
  box-shadow: none;
  color: #2c5777;
}
`

const StartPage = () => {
  const [start, setStart] = useState(false)
  const onStart = () => {
    setStart(true)
  }

  if (start) {
    return <TaskList />
  } else {
    return (
      <StartContainer>
        <StartTitle>
            Having trouble keeping things in your head? <br />
            Write them down here instead!
        </StartTitle>
        <StartButton onClick={onStart}>Begin your to do-list</StartButton>
      </StartContainer>
    )
  }
}

export default StartPage;