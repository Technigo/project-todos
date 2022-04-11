import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
    name: 'todos',
    initialState: [
        {
            id: 1, text: 'Go for a walk', complete: false
        },
        {
            id: 2, text: 'Read a book', complete: true
        },
        {
            id: 3, text: 'Cook something delicious', complete: false
        },
        {
            id: 4, text: 'Update your LinkedIn', complete: false
        }
    ],
    reducers: {
        removeAll: (store, action) => {
            console.log(store)
            console.log(action)
        }
    }
})

export default todos;