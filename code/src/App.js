import React from 'react'
import { Provider } from 'react-redux'
import { TodoList } from 'components/TodoList'
import { TodoInput } from 'components/TodoInput'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import { todos } from 'reducers/todos'
import { TodoSummary } from 'components/TodoSummary'

// const initialState = {
//   list: {
//     name: 'Test list',
//     items: [
//       {
//         description: 'Drink coffee',
//         done: false
//       },
//       {
//         description: 'Take a walk',
//         done: false
//       }
//     ]
//   }
// }

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}


// let state = loadFromLocalStorage()
// if (!state || state.list.items.length === 0) {
//   state = initialState;
// }

const reducer = combineReducers({ todos: todos.reducer })

const persistedState = loadFromLocalStorage()

const store = createStore(
  reducer,
  persistedState,
  // initialState
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <div className='header-wrapper'>
          <TodoInput />
          <TodoList />
        </div>
        <TodoSummary />
      </main>
    </Provider>
  )
}
