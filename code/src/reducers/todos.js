import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/v4';

export const todos = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, text: 'Todo test 1', completed: false },
    { id: 2, text: 'Todo test 2', completed: false },
    { id: 3, text: 'Todo test 3', completed: false }
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
    }
  }
});
