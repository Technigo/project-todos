import { createSlice } from '@reduxjs/toolkit';

const toDoData = [
  { id: 1, title: 'Milk', price: 10, emoji: '🥛' },
  { id: 2, title: 'Chili', price: 15, emoji: '🌶' },
  { id: 3, title: 'Lamb cutlets', price: 15, emoji: '🐏' }
]

export const toDoList = createSlice({
  name: 'toDoList',
  initialState: toDoData
})