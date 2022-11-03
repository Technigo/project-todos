import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const Counter = () => {
  const items = useSelector((store) => store.ToDo.items.length);
  return <P>You have <Count> <b>{items}</b> </Count> tasks today</P>
};

const P = styled.p`
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
background-color: #E089A9;
box-shadow: 4px 4px 12px -9px rgba(0,0,0,0.68);
-webkit-box-shadow: 4px 4px 12px -9px rgba(0,0,0,0.68);
-moz-box-shadow: 4px 4px 12px -9px rgba(0,0,0,0.68);
`

