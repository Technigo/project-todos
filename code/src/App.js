import React from 'react';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todos } from './reducers/todos';
import  Home  from './pages/Home';


// StoreCreation - tell redux about my reducers 
const reducer = combineReducers({ todos: todos.reducer, })

// StoreCreation - Create the store using our reducers and the retrieved state
//
//const store = configureStore({ reducer })

const persistedStateJSON = localStorage.getItem('reduxState')
let persistedState = {}
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}
console.log(`persistedState: ${persistedState}`)

const store = configureStore({
  reducer,
  preloadedState: persistedState
})

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Home/>
      </div>
    </Provider>
  )
}
export default App

// import React from 'react';

// import  Home  from './pages/Home';

// const App = () => {
//   return (
//     <div>
//       <Home />
//     </div>
//   )
// };
// export default App;
