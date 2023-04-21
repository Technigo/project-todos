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
      const clickedTask = store.tasks.find((task) => task.id === action.payload.id);
      if (clickedTask) {
        store.tasks = store.tasks.filter((task) => task.id !== clickedTask.id);
      }
    }
  }
});

export default completed;
