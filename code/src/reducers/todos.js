import { createSlice } from '@reduxjs/toolkit';

//This is the database of todos

const todoData = [
    { id: 1, title: 'Eat' },
    { id: 2, title: 'Clean' },
    { id: 3, title: 'Dance'}
]

export const todos = createSlice({
    name: 'todos' ,
    initialState: todoData
})