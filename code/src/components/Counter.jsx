import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Number = styled.h2`
  position: absolute;
  top: 0;
  right: 5%;
  color: red;
`;

export const Counter = () => {
  const items = useSelector((store) => store.todos.items.filter((item) => !item.isComplete));
  
  return (
    <Number>{items.length}</Number>
  )
}