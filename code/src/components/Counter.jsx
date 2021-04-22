import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Number = styled.h2`
  position: absolute;
  top: 5%;
  left: 5%;
  color: #5899E2;
  margin: 0;
  border: 1px solid #5899E2;
  border-radius: 50%;
  padding: 10px 15px;
`;

export const Counter = () => {
  const items = useSelector((store) => store.todos.items.filter((item) => !item.isComplete));
  
  return (
    <Number>{items.length}</Number>
  )
}