import { createSlice } from "@reduxjs/toolkit";

const data = [
        {
            id: '1',
            task: 'Eat',
            isComplete: 'false',
            display:'true'
        },
        {
            id: '2',
            task: 'Sleep',
            isComplete: 'true',
            display:'true'
        },
        {
            id: '3',
            task: 'Clean',
            isComplete: 'false',
            display:'false'
        },
        {
            id: '4',
            task: 'Workout',
            isComplete: 'true',
            display:'false'
        }
    ]

    const todos = createSlice({
        name: 'todos',
        initialState: {
            items: data,
},
reducers: {}
});

export default todos;