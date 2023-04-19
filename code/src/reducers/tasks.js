import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '843h0fhyuhhdf348hd8sj68ipud',
      name: 'Do laundry',
      isDone: false
    },
    {
      id: '843h0fhyuhhdf348hd8sjew65ug',
      name: 'Buy milk',
      isDone: false
    },
    {
      id: '843h0fhyuhhdf348hd8sj67ipuf',
      name: 'Walk the dog',
      isDone: true
    }
  ]
}

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    }
  }
});

export default tasks;