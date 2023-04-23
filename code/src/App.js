import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { GlobalStyle } from 'styles/GlobalStyle';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <ToDoList />
      </PersistGate>
    </Provider>
  )
}

// ctrl + c inside the terminal to stop the liveServer