import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [
            { id: 1, description: 'test', isComplete: false },
            { id: 2, description: 'testtest', isComplete: true },
            { id: 3, description: 'testtesttest', isComplete: false }
        ]
    },
    reducers: {

    }
})

export default todos