import React from 'react';

import { Link } from 'react-router-dom';

import TodoInput from '../components/TodoInput';
import styled from 'styled-components';
import { BackArrow } from '../lib/Image';

const CreateTodo = () => {
  return (
    <CreateContainer>
      <Link to='/'>
        <BackArrow src="../assets/back-arrow-white.svg" alt="back arrow icon" role="button"/>  
      </Link>
      <TodoInput /> 
    </CreateContainer>
  )
}
export default CreateTodo;

const CreateContainer = styled.main `
  height: 100vh;
  //background-image: linear-gradient(180deg, #590015, #793935, #98685a, #b49881);
  background-image: linear-gradient(180deg, #05324b, #3d5f6b, #6c908c, #9cc5ae);
  padding: 20px;

  display: flex;
  //justify-content: center;
  flex-direction: column;
  align-items: center;
`