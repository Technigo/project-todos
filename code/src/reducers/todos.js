import { createSlice } from '@reduxjs/toolkit';

//This is the database of todos

const todoData = [
    { id: 1, title: 'Eat', isCompleted: false },
    { id: 2, title: 'Clean', isCompleted: false },
    { id: 3, title: 'Dance', isCompleted: false }
]

export const todos = createSlice({
    name: 'todos' ,
    initialState: todoData
})