import { createSlice } from '@reduxjs/toolkit'

const listarray = {
    list: {
        name: 'First Todo List',
        tasks: [
            {
              description: 'First',
              done: false  
            },
            {
              description: 'Second',
              done: false  
            },
            {
              description: 'Third',
              done: false  
            },
        ]
    }
}

export const todos = createSlice({
    name: ''
})