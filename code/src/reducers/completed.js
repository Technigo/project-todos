import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    {
      id: 4,
      text: 'Set up Store',
      isCompleted: false
    },
    {
      id: 5,
      text: 'Set up Reducers',
      isCompleted: false
    },
    {
      id: 6,
      text: 'Set up Components',
      isCompleted: false
    }
  ]
};

const completed = createSlice({
  name: 'completed',
  initialState,
  reducers: {}
});

export default completed;
