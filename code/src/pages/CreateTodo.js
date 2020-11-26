import React from 'react';

import { Link } from 'react-router-dom';

import TodoInput from '../components/TodoInput';
import styled from 'styled-components';
import { BackArrow } from '../lib/Image';

const CreateTodo = () => {
  return (
    <CreateContainer>
      <BackButton> 
        <Link to='/'>
          <BackArrow src="../assets/back-arrow-white.svg" alt="back arrow icon" role="button"/>  
        </Link>
      </BackButton>
      <TodoInput /> 
    </CreateContainer>
  );
};
export default CreateTodo;

const CreateContainer = styled.main `
  height: 100vh;
  background-image: linear-gradient(180deg, #05324b, #3d5f6b, #6c908c, #9cc5ae);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButton = styled.div `
  align-self: flex-start;
`;