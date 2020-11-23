import React from 'react';
import { useSelector } from "react-redux";

import TodoList  from '../components/TodoList';
//import TodayDate from '../components/TodayDate';
import CreateTodo from './CreateTodo';


const Home = () => {
  const homePage = useSelector((store) => store.todos.homePage); 

 console.log(homePage ? 'true' : 'false')
  return (   
    <>      
      {/* <TodayDate />  */}
      {!homePage 
      ? <TodoList /> 
      : <CreateTodo />} 
    </>
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