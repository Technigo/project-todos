import React from 'react'
import { Provider } from "react-redux"
import { createStore, combineReducers } from '@reduxjs/toolkit'

/*
Plan:
-create TodoInput
-create store
-use Provider
-create TodoList
-create TodoItem
-create TodoSummary
*/

// StoreCreation : Tell redux about our reducers

// Persistence: Retrieve the existing state from localstorage if it exists

// StoreCreation: Create the store using our reducers and the retrieved state

// Persistence: Tell the store to persist the state in localstorage after every action

export const Home = () => {
  return <main></main>
}