import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const taskData = [
  { id: 1, title: 'Book hotel in Ubud' },
  { id: 2, title: 'Add projects in my portfolio' },
  { id: 3, title: 'Make a pitch about myself' }
];

export const tasks = createSlice({
  name: 'tasks',
  initialState: taskData
});
