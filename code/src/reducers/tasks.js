/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // first argument references the state of the store, second argument references the data that is
    // passed down from a component

    addTask: (store, action) => {
    // Mutable
    //   store.items.push(action.payload);
    // Immutable
      store.items = [action.payload, ...store.items]
      // const x = ['a','b','c']
      // const y = [x, 'd'] => [['a','b','c'], 'd']
      // const z = [...x, 'd']  => ['a','b','c','d']
      // const superObject = {a: 'test', b:'other test'}
      // const supererObject = {...superObject, c: 'third test'}
    },
    toggleTask: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload.taskId) {
          item.isDone = !item.isDone
        }
      })
    },
    deleteTask: (store, action) => {
      const index = store.items.findIndex((element) => element.id === action.payload.id);
      store.items.splice(index, 1);

      /* const updatedItems = store.items.filter((item) => item.id !== action.payload.id);
      return { ...store, items: updatedItems }; */

      /* const updatedItems = store.items
      condition = (item) => item.id === action.payload.id */

      /* const { id } = action.payload;
      splice to remove a single element if I know the index
      const copyOfPokemonArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfPokemonArrayFromStore.findIndex(condition);
      copyOfPokemonArrayFromStore.splice(foundIndex, 1);
      store.items = copyOfPokemonArrayFromStore; */
    },
    clearTasks: () => {
      return initialState
    }
  }
})

/*     deleteSinglePokemon: (store, action) => {
      // const { id } = action.payload;
      const id = action.payload;
      console.log('action.payload', action.payload)
      // splice to remove a single element if I know the index
      const copyOfPokemonArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfPokemonArrayFromStore.findIndex(condition);
      copyOfPokemonArrayFromStore.splice(foundIndex, 1);
      store.items = copyOfPokemonArrayFromStore;
    }, */

/*    toggleIfPokemonIsCaught: (store, action) => {
      const id = action.payload;
      const copyOfPokemonArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfPokemonArrayFromStore.findIndex(condition);
      copyOfPokemonArrayFromStore[foundIndex].isCaught = !copyOfPokemonArrayFromStore[foundIndex].isCaught;
      store.items = copyOfPokemonArrayFromStore;
    } */