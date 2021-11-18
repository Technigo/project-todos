import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import moment from 'moment';

const todos = createSlice({
  name: 'todos',
  initialState: {
    todoListItems: [],
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
        timePosted: moment().format('LLL'),
      };

      store.todoListItems = [newTodo, ...store.todoListItems];
    },
    toggleCheckbox: (store, action) => {
      const updatedListItems = store.todoListItems.map((listItem) => {
        if (listItem.id === action.payload) {
          const updatedTodo = {
            ...listItem,
            isComplete: !listItem.isComplete,
          };
          return updatedTodo;
        } else {
          return listItem;
        }
      });
      store.todoListItems = updatedListItems;
    },
    deleteTodo: (store, action) => {
      const decreasedItems = store.todoListItems.filter(
        (listItem) => listItem.id !== action.payload
      );

      store.todoListItems = decreasedItems;
    },
    completeAllTasks: (store) => {
      const completeAll = store.todoListItems.map((todoTask) => {
        if (todoTask.isComplete) {
          return { ...todoTask };
        } else
          return {
            ...todoTask,
            isComplete: !todoTask.isComplete,
          };
      });
      store.todoListItems = completeAll;
    },
  },
});

export default todos;
