import React from "react";
import styled from "styled-components/macro";

const Button = styled.button`
  position: relative;
  display: inline-block;

  text-align: center;
  font-family: inherit;
  font-size: 34px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #725ac1;
  background: rgba(46, 81, 218, 0.3);
  cursor: pointer;
  transition: ease-out 0.5s;
  border-radius: 50%;
  border: 2px solid #725ac1;
  box-shadow: inset 0 0 0 0 #725ac1;
  width: 50px;
  height: 50px;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #725ac1;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const OpenTodo = ({ setNewAddTodo }) => {
  const onOpenTodo = () => {
    setNewAddTodo(true);
  };

  return <Button onClick={onOpenTodo}>+</Button>;
};

export default OpenTodo;
