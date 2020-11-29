import React from 'react';
import styled from 'styled-components';

import TodoInput from '../components/TodoInput';
import CreateHeader from 'components/CreateHeader';
import { Container } from '../library/Container';

const CreateTodo = () => {
  return (
    <Wrapper>
      <CreateHeader />
      <TodoInput />
    </Wrapper>
  );
};
export default CreateTodo;

const Wrapper = styled(Container)`
  background-image: linear-gradient(#5c52ac, #483c90, #3b2f7d);
`;
