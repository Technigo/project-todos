import { createSlice } from '@reduxjs/toolkit'


const toDosData = [
    { id: 1, title: 'Watch a movie' },
    { id: 2, title: 'Read a book' },
    { id: 3, title: 'Do some coding' }

]

export const toDoList = createSlice({
    name: 'toDos',
    initialState: toDosData
})