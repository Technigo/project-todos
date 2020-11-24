import React from 'react';
//import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import TodoInput from '../components/TodoInput';
import CreateHeader from 'components/CreateHeader';

const CreateTodo = () => {
  //const dispatch = useDispatch();

  // const handleGoBackClick = () => {
  //   dispatch(todos.actions.goToStartPage());
  // };

  return (
    <Wrapper>
      <CreateHeader />
      <TodoInput />
      {/* <Button
        onClick={() => handleGoBackClick()}
        type="button"
        className="go-back-button"
      >
        Go Back
      </Button> */}
    </Wrapper>
  );
};
export default CreateTodo;

const Wrapper = styled.div`
  background-image: linear-gradient(138deg, #4a036f, #59117e, #6e2296, #8a36b5);
  height: 100vh;
`;
