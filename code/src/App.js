import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import List from 'components/List';
import AddTask from 'components/AddTask';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { OuterWrapper } from 'styles/mainStyles';
// import styled from 'styled-components/macro';
import tasks from './reducers/tasks';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({
    reducer
  })

  return (
    <Provider store={store}>
      <OuterWrapper>
        <Header />
        {/* <GridWrapper> */}
        <AddTask />
        <List />
        {/* </GridWrapper> */}
        <Footer />
      </OuterWrapper>
    </Provider>
  );
}

// const GridWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 40% 40%;
// `
