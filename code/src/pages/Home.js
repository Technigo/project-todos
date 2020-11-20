import React from 'react';

import TodoList  from '../components/TodoList';
import TodayDate from '../components/TodayDate';

const Home = () => {
  return (
    <div>
      <TodayDate /> 
      <TodoList />
    </div>
  )
};
export default Home;

// import React from 'react';

// import { Provider } from 'react-redux';
// import { createStore, combineReducers, configureStore } from '@reduxjs/toolkit';
// import { todos } from '../reducers/todos';
// import  TodoList  from '../components/TodoList';


// // StoreCreation - tell redux about my reducers 
// const reducer = combineReducers({ todos: todos.reducer, })

// // StoreCreation - Create the store using our reducers and the retrieved state
// //
// const store = configureStore({ reducer })

// const Home = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <TodoList/>
//       </div>
//     </Provider>
//   )
// }
// export default Home
/*
PLAN
 - Create TodoInput 
 - create store
 - use Provider
 - create TodoList
 - create TodoItem
 - create TodoSummary 
 - 


*/