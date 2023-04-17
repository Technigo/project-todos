// import React from 'react';

// export const App = () => {
//   return (
//     <div>
//       Find me in src/app.js!
//     </div>
//   );
// }


// src/App.js
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from './reducers/tasks'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      Your components can be mounted here, inside the Provider.
    </Provider>
  )
}