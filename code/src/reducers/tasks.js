/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({

  name: 'tasks',

  initialState: [
    { id: 1, text: 'Read documantation for this week', complete: true },
    { id: 2, text: 'Make sketch of this week project', complete: true },
    { id: 3, text: 'Update Linkedin profile', complete: false },
    { id: 4, text: 'Sent your code review from last week', complete: true },
    { id: 5, text: 'Call Grandma', complete: true }
  ]
})