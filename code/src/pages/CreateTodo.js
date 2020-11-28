import React from 'react';
import styled from 'styled-components';

import TodoInput from '../components/TodoInput';
import CreateHeader from 'components/CreateHeader';

const CreateTodo = () => {
  return (
    <Wrapper>
      <CreateHeader />
      <TodoInput />
    </Wrapper>
  );
};
export default CreateTodo;

const Wrapper = styled.section`
  display: grid;
  background-image: linear-gradient(#5c52ac, #483c90, #3b2f7d);
  height: 90vh;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 30px;
`;
