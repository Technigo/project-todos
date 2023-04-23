/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

// initioal state can also be set to an empty array. it just has to be an array.

const initialState = {
  items: [
    {
      id: '1',
      taskName: 'Give yourself a highfive 🙌🏻', // name is to store the input
      isChecked: false
    },
    {
      id: '2',
      taskName: 'Go pet your dog 🐶 ',
      isChecked: false // define with myself, also change it in the addNewTask
    }
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

    addTask: (store, action) => {
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