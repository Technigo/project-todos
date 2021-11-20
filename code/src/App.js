import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import Header from 'components/Header'
import AddQuest from 'components/AddQuest'
import QuestList from 'components/QuestList'
import Progress from 'components/Progress'
import Footer from 'components/Footer'
import quests from './reducers/quests'

const reducer = combineReducers({
  quests: quests.reducer,
})

// get the localStorage in JSON string format
const persistedStateJSON = localStorage.getItem('questsReduxState')
let persistedState = {}

// if we have data in persistedStateJSON -> convert to an object
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// create a store with initial state
const store = createStore(
  reducer,
  persistedState,
  /* enable the redux devtools */
  /* eslint-disable-next-line no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// update the title with the amount of quests
document.title = `(${store.getState().quests.items.length}) My Quests`

// store the state in localStorage as JSON string on Redux state change
store.subscribe(() => {
  document.title = `(${store.getState().quests.items.length}) My Quests`
  localStorage.setItem('questsReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddQuest />
      <QuestList />
      <Progress />
      <Footer />
    </Provider>
  )
}
