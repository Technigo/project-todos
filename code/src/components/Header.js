import React from 'react';
import styled from 'styled-components';
import { Counter } from 'components/Counter'
import ToDo from 'components/Images/icons8-to-do-30.png'

const date = new Date();
const todaysDate = date.toString().slice(0, 15);

export const Header = () => {
  return (
    <Head>
      <Div>
        <TodaysDate>{todaysDate}</TodaysDate>
        <H1>
          <Icon
            className="icon1"
            src={ToDo}
            alt="Icon" />
          Todays ToDos!
        </H1>
        <Counter />
      </Div>
    </Head>
  );
};

const Head = styled.div`
// border: solid black 2px;
background-color: #E0DDCD;
align-items: right;
display: flex;
flex-direction: column;
padding: 10px;
`
const Div = styled.div`
// border: solid blue 2px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
`
const H1 = styled.h1`
// border: solid red 2px;
display: flex;
justify-content: center;
`
const TodaysDate = styled.div`
// border: solid green 2px;
color: grey;
display: flex;
margin: 20px 0 0 0;
`
const Icon = styled.img`
width: 30px;
height: 30px;
// background-color: pink;
margin: 0px 8px; 0px 0;
`
