import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/v4';

export const todos = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      text: 'Todo 1',
      createdAt: '2020-01-12T15:14:51.733Z',
      completed: false
    },
    {
      id: 2,
      text: 'Todo 2',
      createdAt: '2020-01-13T13:14:51.733Z',
      completed: false
    },
    {
      id: 3,
      text: 'Todo 3',
      createdAt: '2020-01-14T14:14:51.733Z',
      completed: false
    },
    {
      id: 4,
      text: 'Todo 4',
      createdAt: '2020-01-14T15:20:13.556Z',
      completed: false
    }
  ],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text, createdAt } = action.payload;
        state.push({ id, text, createdAt, completed: false });
      },
      prepare({ text }) {
        return {
          payload: {
            text,
            id: uuid(),
            // https://github.com/rt2zz/redux-persist/issues/988
            createdAt: new Date().toISOString()
          }
        };
      }
    },
    removeTodo: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload.todo;
      const todo = state.find(todo => todo.id === id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});
