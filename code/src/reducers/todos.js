import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice ({
    name: 'todos',
    initialState: [
      {id:1, description:"Cooking dinner", isComplete: false},
      {id:2, description:"Doing dishes", isComplete: true},
      {id:3, description:"Cleaning the rooms", isComplete: false}
    ],
    reducers: {

    }
})

export default todos;