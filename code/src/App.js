import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import Header from 'components/Header';
import store from 'store';
import Input from 'components/Input';
import TodoList from 'components/TodoList';

export const App = () => {
  return (
    <Provider store={store}>
      <WebStyle>
        <Header />
        <Container>
          <Input />
          <TodoContainer>
            <TodoList />
          </TodoContainer>
        </Container>
      </WebStyle>
    </Provider>
  );
}

const WebStyle = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(168, 173, 182);
  display: grid;
  place-items: center;
`;

const Container = styled.div`
  height: 700px;
  width: 500px;
  background-color: rgb(232, 234, 237);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  padding: 32px 0;
`;

const TodoContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;