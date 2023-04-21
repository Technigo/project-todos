import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '843h0fhyuhhdf348hd8sj68ipud',
      name: 'Do laundry',
      isDone: false
    },
    {
      id: '843h0fhyuhhdf348hd8sjew65ug',
      name: 'Buy milk',
      isDone: false
    },
    {
      id: '843h0fhyuhhdf348hd8sj67ipuf',
      name: 'Walk the dog',
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
    },
    handleCheck: (store, action) => {
      const { id } = action.payload;
      const newArray = [...store.items]
      const indexOfObject = newArray.findIndex((item) => item.id === id)
      if (indexOfObject > -1) {
        newArray[indexOfObject].isChecked = !newArray[indexOfObject].isChecked
        store.items = newArray
      }
    }
  }
});

export default tasks;