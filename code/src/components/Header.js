import React from 'react';
import styled from 'styled-components';
import { Counter } from 'components/Counter'

const date = new Date();
const todaysDate = date.toString().slice(0, 15);

export const Header = () => {
  return (
    <Head>
      <Counter />
      <Div>
        <TodaysDate>{todaysDate}</TodaysDate>
        <H1>Your To Do list</H1>
      </Div>
    </Head>
  );
};

const Head = styled.div`
border: solid black 2px;
align-items: right;
display: flex;
flex-direction: column;

`
const Div = styled.div`
border: solid blue 2px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
`
const H1 = styled.h1`
border: solid red 2px;
display: flex;

`
const TodaysDate = styled.div`
border: solid green 2px;
display: flex;
margin: 10px 0 0 0;
`