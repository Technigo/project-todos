/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

// initioal state can also be set to an empty array. it just has to be an array.

const initialState = {
  items: [
    /*     {
      id: '1',
      taskName: 'Style this ugly list', // name is to store the input
      isChecked: false
    },
    {
      id: '2',
      taskName: 'Get rid of the damn dot on the left side',
      isChecked: false // define with myself, also change it in the addNewTask
    },
    {
      id: '3',
      taskName: 'Do the laundry',
      isChecked: false
    },
    {
      id: '4',
      taskName: 'Buy some chips',
      isChecked: false // isChecked same as in tasks.js
    } */
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // "store, action" can be potato, banana, first argument (store) references the state of the store, second argument (action)references the data that is
    // passed down from a component
    addTask: (store, action) => {
      // Mutable way. (varje gång man muterar the state of the store, youll get a warning). MEN detta vill vi inte. Vi vill att det ska vara immutable:
      /*    store.items.push(action.payload); */

      // Immutable way:
      store.items = [...store.items, action.payload]
    },
    deleteAllTasks: (store) => {
      store.items = [];
    },
    deleteSingleTask: (store, action) => {
      // const { id } = action.payload;
      const id = action.payload;
      console.log('action.payload', action.payload)
      // splice to remove a single element if I know the index
      const copyOfTaskListArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfTaskListArrayFromStore.findIndex(condition);
      copyOfTaskListArrayFromStore.splice(foundIndex, 1);
      store.items = copyOfTaskListArrayFromStore;
    },
    toggleIfTaskIsChecked: (store, action) => {
      const id = action.payload;
      const copyTaskListArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyTaskListArrayFromStore.findIndex(condition);
      copyTaskListArrayFromStore[foundIndex].isChecked = !copyTaskListArrayFromStore[foundIndex].isChecked;
      store.items = copyTaskListArrayFromStore;
    }

  }
});

export default tasks;