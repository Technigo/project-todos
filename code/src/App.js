import React from 'react';

import { Provider } from 'react-redux';
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import { todos } from './reducers/todos';
import  Home  from './pages/Home';


// StoreCreation - tell redux about my reducers 
const reducer = combineReducers({ todos: todos.reducer, })

// StoreCreation - Create the store using our reducers and the retrieved state
//
//const store = configureStore({ reducer })

//ÖPPNA UPP SEN NÄR ALLT ÄR KLART 
const persistedStateJSON = localStorage.getItem('reduxState1')
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
  localStorage.setItem('reduxState1', JSON.stringify(store.getState()))
})

const App = () => {
  // const saveToLocalStorage = (state) => {
  //   try {
  //     const serializedState = JSON.stringify(state);
  //     localStorage.setItem("state", serializedState);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const loadFromLocalStorage = () => {
  //   try {
  //     const serializedState = localStorage.getItem("state");
  //     if (serializedState === null) return undefined;
  //     return JSON.parse(serializedState);
  //   } catch (e) {
  //     console.log(e);
  //     return undefined;
  //   }
  // };

  // const reducer = combineReducers({ todos: todos.reducer });
  // const persistedState = loadFromLocalStorage();

  // const store = createStore(reducer, persistedState);
  // store.subscribe(() => saveToLocalStorage(store.getState()));
  
  return (
    <Provider store={store}>
      <main>
        <Home/>
      </main>
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
