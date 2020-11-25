import {createSlice} from '@reduxjs/toolkit'

export const todos = createSlice({
    name:'todos',
    initialState: {
        username: 'Bam',
        items: [
            {
                id: 1, 
                text: 'the first',
                category: 'task',
                isComlete: false
            },
            {
                id: 2, 
                text: 'the secord',
                category: 'task',
                isComlete: false
            },
            {
                id: 3, 
                text: 'the third',
                category: 'task',
                isComlete: false
            },
        ]
    }, 
    reducers: {
        removeOne: (store, action) => {
            store.items = store.items.filter((item) => item.id !== action.payload)
            // const exisitingProduct = state.items.find((item) => item.id === action.payload.id)
            // if (exisitingProduct) {
            //     exisitingProduct.quantity -= 1
            // }
            // state.items.pop(); //bad way
        },
        addTask: (store, action) => {
            const newTask = {
                id: Math.max(...store.items.map(item => item.id)) + 1,
                text: action.payload,
                category: '',
                isComlete: false
            }

            const newTaskList = [...store.items, newTask]

            store.items = newTaskList
            
        },
        removeAll: (store, action) => {
            store.items = []
        }
    }
})