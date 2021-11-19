import React from 'react';
import { useSelector } from 'react-redux';
import img from '../img/shark-finished.png';

import styled from "styled-components";

const NotodosContainer = styled.div`
	text-align: center;
	font-size: 30px;
	color: grey;
	margin: 20px auto;
	font-family: 'Gaegu', cursive;
	img {
	width: 30%;
	border-left: 5px solid #fff;
	animation: spinner infinite 4s;
}

@keyframes spinner {
	0% {
		transform: rotate(0);
	}
	50% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
`;

const NoTodoLeft = () => {

  const items = useSelector((store) => store.todos.items);
  const activeTodos = items.length;
  const noTodosLeft = activeTodos === 0;
  

//When todos is cleared "Clear all todos button" is removed and spinning shark is shown
  return (
    <>
    { noTodosLeft === true && 
    <NotodosContainer>
      <p>Fintastic all cleared!</p>
      <img src={img} alt="shark-img" />
    </NotodosContainer>
    }
    </>
  )
};
export default NoTodoLeft;