/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 'ToDoThisWeek001',
      name: 'Read up on Redux',
      isDone: false
    },

    {
      id: 'ToDoThisWeek002',
      name: 'Prepare for oneOnOne Thursday',
      isDone: false
    },
    {
      id: 'ToDoThisWeek003',
      name: 'Go back to the handoff-project',
      isDone: false
    }
  ]
}

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    deleteAllTodos: (store) => {
      store.items = [];
    },
    deleteSingleTodo: (store, action) => {
      const id = action.payload;
      // const { id } = action.payload;
      const copyOfTodoArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfTodoArrayFromStore.findIndex(condition);
      copyOfTodoArrayFromStore.splice(foundIndex, 1);
      store.items = copyOfTodoArrayFromStore;
    },
    toggeIfTodoIsDone: (store, action) => {
      const id = action.payload;
      // const { id } = action.payload;
      const copyOfTodoArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfTodoArrayFromStore.findIndex(condition);
      copyOfTodoArrayFromStore[foundIndex].isDone = !copyOfTodoArrayFromStore[foundIndex].isDone;
      store.items = copyOfTodoArrayFromStore;
    }
  }
});

export default todos;