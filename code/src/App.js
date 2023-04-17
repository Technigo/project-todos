/* Import CombineReducers and configureStore */
import React from 'react';
import { Provider } from 'react-redux';

/* const reducer = combineReducers({
  undone: 'insert undone.reducer',
  done: 'insert done.reducer'
})

const store = configureStore({ reducer }); */

export const App = () => {
  return (
    <Provider store={store}>
      <p>Todo-app comming soon!</p>
    </Provider>
  );
}
