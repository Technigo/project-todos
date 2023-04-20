import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    /* {
      id: '1',
      description: 'Do laundry',
      isCompleted: false
    },
    {
      id: '2',
      description: 'Buy milk',
      isCompleted: false
    } */
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setupStore: (store, action) => {
      store.items = action.payload
    },
    // first argument references the state of the store, second argument references the data that is
    // passed down from a component
    addTask: (store, action) => {
    // Mutable, avoid because it's unpredictable
    //   store.items.push(action.payload);
    // Immutable
      store.items = [...store.items, action.payload];
      // const x = ['a','b','c']
      // const y = [x, 'd'] => [['a','b','c'], 'd']
      // const z = [...x, 'd']  => ['a','b','c','d']
      // const superObject = {a: 'test', b:'other test'}
      // const supererObject = {...superObject, c: 'third test'}
      localStorage.setItem('taskList', JSON.stringify(store.items))
    },
    removeTask: (store, action) => {
      // This approach is mutable (bad) store.items.splice(action.payload, 1)
      // The general idea is to not use filter to delete stuff, but to actually filter
      // store.items = store.items.filter((item) => item.id !== action.payload.id)
      // const id = action.payload
      // const copyOfTaskArrayFromStore = store.items
      // const condition = (element) => element.id === id
      // const foundIndex = copyOfTaskArrayFromStore.findIndex(condition)
      // copyOfTaskArrayFromStore.splice(foundIndex, 1)
      // store.items = copyOfTaskArrayFromStore

      const index = store.items.findIndex((element) => element.id === action.payload.id);
      store.items.splice(index, 1);

      localStorage.setItem('taskList', JSON.stringify(store.items))
    },
    removeAllTasks: (store) => {
      store.items = []

      localStorage.setItem('taskList', JSON.stringify(store.items))
    },
    toggleComplete: (store, action) => {
      store.items.forEach((task) => {
        if (task.id === action.payload.id) {
          task.isCompleted = !task.isCompleted

          localStorage.setItem('taskList', JSON.stringify(store.items))
        }
      })
    }
  }
});

export default tasks;