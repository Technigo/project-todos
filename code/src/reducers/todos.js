import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    items: []
}

export const todos = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        removeItem:(store, action) => { 
            const itemId = action.payload;
            const filteredList = store.items.filter(item => item.id !== itemId)
            store.items = filteredList;
        },

        addNewTodo: (store, action) => {
            const newItem = {
                id: uuidv4(), //adds a uniqe id for each ToDo
                text: action.payload,
                complete: false,
                date: Date.now()
            }
            const newItemsList = [...store.items, newItem]
            
            store.items = newItemsList;
        },     
        
        toggleComplete: (store, action) => {
            const checkedItem = store.items.find(item => item.id === action.payload)
                if (checkedItem) {
                    checkedItem.complete = !checkedItem.complete
                }
        }
    } 
});
