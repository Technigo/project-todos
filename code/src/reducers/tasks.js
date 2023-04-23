import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '843h0fhyuhhdf348hd8sj68ipud',
      name: 'Dream about tomorrow',
      isDone: false
    },
    {
      id: '843h0fhyuhhdf348hd8sjew65ug',
      name: 'Learn a new language',
      isDone: false
    },
    {
      id: '843h0fhyuhhdf348hd8sj67ipuf',
      name: 'Swing from a tree',
      isDone: false
    }
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    deleteAllTask: (store) => {
      store.items = [];
    },
    deleteSingleTask: (store, action) => {
      const id = action.payload;
      const copyOfTaskArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfTaskArrayFromStore.findIndex(condition);
      copyOfTaskArrayFromStore.splice(foundIndex, 1);
      store.items = copyOfTaskArrayFromStore;
    },
    toggleTaskIsDone: (store, action) => {
      const id = action.payload;
      const copyOfTaskArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfTaskArrayFromStore.findIndex(condition);
      copyOfTaskArrayFromStore[foundIndex].isDone = !copyOfTaskArrayFromStore[foundIndex].isDone;
      store.items = copyOfTaskArrayFromStore;
    }
  }
});

export default tasks;