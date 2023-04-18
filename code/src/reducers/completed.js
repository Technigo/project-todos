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
  reducers: {}
});

export default completed;
