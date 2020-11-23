
import React from 'react';
import { Provider } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todos } from 'reducers/todos';
import { List } from 'components/List';

const reducer = combineReducers({ todos: todos.reducer });

const store = configureStore({ reducer })

export const App = () => (
    <Provider store={store}>
   <List>

   </List>
    </Provider>
  )











// import React from 'react'
// import { Provider } from 'react-redux'
// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { TodoTasks } from 'components/TodoTasks'


// import { todoTasks } from 'reducers/todoTasks'

// const reducer = combineReducers({
//   todoTasks: todoTasks.reducer
// })

// const store = configureStore({ reducer })

// export const App = () => (
//     <Provider store={store}>
//       <TodoTasks />
//     </Provider>
//   )





