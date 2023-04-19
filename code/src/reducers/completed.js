import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  tasks: [
    {
      id: uuid(),
      text: 'Started tasking',
      isCompleted: true
    }
  ]
};

const completed = createSlice({
  name: 'completed',
  initialState,
  reducers: {
    deleteTask: (store, action) => {
      // selects the clicked task by Id and filters it out from store
      const clickedTaskId = store.tasks.find((task) => task.id === action.payload.id);

      if (clickedTaskId) {
        store.tasks = store.tasks.filter((task) => task.id !== action.payload.id)
      }
    }
  }
});

export default completed;
