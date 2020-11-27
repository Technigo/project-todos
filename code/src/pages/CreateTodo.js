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
  display: grid;
  /* display: flex;
  flex-direction; ce
  align-items: center; */
  background-image: linear-gradient(#5c52ac, #483c90, #3b2f7d);
  height: 100vh;
`;
