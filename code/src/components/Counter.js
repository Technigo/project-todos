import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const Counter = () => {
  const items = useSelector((store) => store.ToDo.items.length);
  return <Count><p>{items}</p></Count>;
};

const Count = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
border: solid;
border: none;
border-radius: 50%;
height: 50px;
width: 50px;
right: 5%; 
top: 2%;
position: absolute;
background-color: #A27DA7;
`

