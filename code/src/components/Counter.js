import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const Counter = () => {
  const items = useSelector((store) => store.ToDo.items.length);
  return <P>You have <Count> <b>{items}</b> </Count> tasks to complete today</P>
};

const P = styled.p`
// border: solid red 2px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;

b{
font-size: 24px;
}
`
const Count = styled.div`
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
border: solid;
border: none;
border-radius: 50%;
height: 50px;
width: 50px;
// right: 5%; 
// top: 2%;
// position: absolute;
background-color: #E089A9;
`

