import {createSlice} from "@reduxjs/toolkit"

const toDoItems = [
    { id: 1, text: 'Watch video on actions & reducers', complete: true },
    { id: 2, text: 'Follow redux codealong', complete: true },
    { id: 3, text: 'Fork weekly assignment', complete: true },
]


export const toDos = createSlice ({
    name: "toDos",
    initialState: toDoItems
})


