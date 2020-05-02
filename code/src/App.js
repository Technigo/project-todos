import React from 'react'
import GlobalFonts from './fonts/fonts'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { Header } from './components/Header'
import { TotalTasks } from './components/TotalTasks'
import { Tasks } from './components/Tasks'
import { todo } from 'reducers/todo'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faCheckCircle, faShoppingCart, faCalendarCheck, faBriefcase, faHeart, faUser, faCircle } from '@fortawesome/free-solid-svg-icons'
import { Main, AppContainer } from './styles/Container'

library.add(faTrashAlt, faCheckCircle, faShoppingCart, faCalendarCheck, faBriefcase, faHeart, faUser, faCircle)


const reducer = combineReducers({
  todo: todo.reducer
})

// Retrieve the localstorage and use it as our initial state
const persistedStateJSON = localStorage.getItem('may2020-reduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// Create the store using the initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Store the state in localstorage on ANY redux state change
store.subscribe(() => {
  localStorage.setItem('may2020-reduxState', JSON.stringify(store.getState()));
})



export const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalFonts />
        <Main>
          <AppContainer>
            <Header />
            <TotalTasks />
            <Tasks />
          </AppContainer>
        </Main>
      </Provider>
    </>
  )
}
