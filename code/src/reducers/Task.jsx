/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      text: 'Take out the trash',
      isComplete: false
    },
    {
      id: 2,
      text: 'Buy milk',
      isComplete: false
    },
    {
      id: 3,
      text: 'Never come back',
      isComplete: false
    }
  ]
};

const Tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // first argument references the state of the store, second one the data passed down from the component
    addTask: (store, action) => {
      // Mutable
      /* store.items.push(action.payload); */
      // Immutable
      store.items = [...store.items, action.payload];
    },
    deleteAllTasks: (store) => {
      store.items = [];
    },
    deleteSingleTask: (store, action) => {
      const id = action.payload;
      // splice to remove a single element if I know the index
      const copyOfTaskArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfTaskArrayFromStore.findIndex(condition);
      copyOfTaskArrayFromStore.splice(foundIndex, 1);
      store.items = copyOfTaskArrayFromStore;
    }
  }
});

export default Tasks;