/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}

export const dailies = createSlice({
  name: 'dailies',
  initialState,
  reducers: {
    // first argument references state of the store, second argument references the data that is
    // passed down from a component
    addDailies: (store, action) => {
      // Mutable:
      // store.items.push(action.payload)
      // Immutable:
      store.items = [...store.items, action.payload];
      // const x = ['a','b','c']
      // const y = [x, 'd'] => [['a','b','c'], 'd']
      // const z = [...x, 'd'] => ['a','b','c','d']
      // const superObject = {a: 'test', b: 'other test'}
      // const supererObject = {...superObject, c: 'third test'}
    },
    questTracker: (store) => {
      return store.items.length
    },
    deleteAllDailies: (store) => {
      store.items = []
    },
    deleteSingleDaily: (store, action) => {
      const id = action.payload
      // splice to remove a single element if I know the index
      const copyOfDailiesArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfDailiesArrayFromStore.findIndex(condition)
      copyOfDailiesArrayFromStore.splice(foundIndex, 1)
      store.items = copyOfDailiesArrayFromStore
    },
    toggleDailyCompleted: (store, action) => {
      const id = action.payload;
      const copyOfDailiesArrayFromStore = store.items
      const condition = (element) => element.id === id
      const foundIndex = copyOfDailiesArrayFromStore.findIndex(condition)
      copyOfDailiesArrayFromStore[foundIndex].complete = !copyOfDailiesArrayFromStore[foundIndex].complete
      store.items = copyOfDailiesArrayFromStore
    }
  }
})
