//Slice method
import { createSlice } from '@reduxjs/toolkit'


//Variable. Object with three properties: name, initialstate, reducers
const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [
            { id: 1, description: 'Test Task', isComplete: false},
            { id: 2, description: 'Test Task', isComplete: false},
            { id: 3, description: 'Test Task', isComplete: false}
        ]
    },
    reducers: {
        //method to manipulate our store
    }
})

//Export slice
export default todos