import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export const HomeBtn = () => {
  return (
    <Link to="/">
      <Buttons type="button">Homepage</Buttons>
    </Link>
  )
}

const Buttons = styled.button`
background-color:#424242;
position: absolute;
bottom: 0;
right: 0;
color: #ffbe91;
border: none;
border-radius: 20px;
font-size: 1rem;
letter-spacing: .15rem;
padding: 0.5rem 1rem;
margin: 10px;
box-shadow: 3px 3px 10px #ffbe91, -3px -3px 10px #ffbe91;

&:hover{
  color: #ff7ab8;
  box-shadow: 3px 3px 10px #ff7ab8, -3px -3px 10px #ff7ab8;
  cursor: pointer;
}
`