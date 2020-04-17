import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, text: 'Watch videos', comlete: true },
    { id: 2, text: 'Studie Redux', comlete: true },
    { id: 3, text: 'Setup Trello', comlete: true },
    { id: 4, text: 'Keep on working on my to do app', comlete: false },
  ]
})