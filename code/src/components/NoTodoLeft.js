import React from 'react';
import { useSelector } from 'react-redux';

import styled from "styled-components";

const NotodosContainer = styled.div`
	text-align: center;
	font-size: 30px;
	color: #ee9ca7;
	margin: 20px auto;
	font-family: 'Comic Neue', cursive;
	img {
		width: 50px;
	}
`;

const NoTodoLeft = () => {

  const items = useSelector((store) => store.todos.items);
  const activeTodos = items.length;
  const noTodosLeft = activeTodos === 0;
  
  return (
    <>
    { noTodosLeft === true && 
    <NotodosContainer>
      <p>No todos here - swim for more?</p>
      {/* <img src={img} alt="notes-img" /> */}
    </NotodosContainer>
    }
    </>
  )
};
export default NoTodoLeft;