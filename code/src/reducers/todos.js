import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    tasks: [
      {id: 1, text: 'bake bread', done: false},
      {id: 2, text: 'put up christmas decoration', done: false},
      {id: 3, text: 'call mum', done: true}
    ]
  }, 
  reducers: {
    removeItem: (store, action) => {
      const itemId = action.payload;
      const filteredList = store.tasks.filter(item => item.id !== itemId);

      store.tasks = filteredList
    },
    toggleDone: (store, action) => {
      const itemId = action.payload;
      const currentItem = store.tasks.find(item => item.id === itemId);
      
      currentItem.done === true ? currentItem.done = false : currentItem.done = true;
      
    },
    addItem: (store, action) => {
      console.log(action.payload)
      const newTask = {
        id: Math.max(...store.tasks.map(item => item.id)) + 1,
        text: action.payload,
        done: false,
        created: new Date 
      };

      const newTaskList = [...store.tasks, newTask];
      store.tasks = newTaskList;
    },
    markAllDone: (store, action) => {
      const doneList = store.tasks.map((task) => {
        const container = {}

        container.id = task.id;
        container.text = task.text;
        container.done = true;

        return container
      });

      store.tasks = doneList;
    },
    clearList: (store, action) => {
      const emptyList = [];

      store.tasks = emptyList;
    }
  }
});
