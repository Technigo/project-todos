import { createSlice } from '@reduxjs/toolkit'

//This is the initial state, 
//it's an object that holds 
//a list, the list is an object that contains an array
//the array consists of items
const initialState = {
    list: {
        name: 'Emelie Todo',
        items: [
            {
                description: 'First Todo',
                done: false
            },
            {
                description: 'Second Todo',
                done: false
            },
            {
                description: 'Third Todo',
                done: false
            },
        ]
    }
}

export const todos = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const { todoItemInfo } = action.payload
            state.list.items.push(todoItemInfo)
        }
        /*setDone: (state, action) => {
            const { itemIndex, done } = action.payload
            state.list.items[itemIndex].done = done
        }*/
    }
})