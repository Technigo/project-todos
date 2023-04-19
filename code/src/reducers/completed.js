import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: []
};

const completed = createSlice({
  name: 'completed',
  initialState,
  reducers: {
    setTaskDone: (store, action) => {
      store.tasks = [...store.tasks, action.payload]
    },
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
