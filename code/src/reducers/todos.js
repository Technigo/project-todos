import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    items: [
        { id: 1, text: 'Laundry', complete: false },
        { id: 2, text: 'Go for a walk', complete: false },
        /*{ id: 3, text: 'Stretch', complete: false },
        { id: 4, text: 'Make dinner', complete: false }, */
    ]
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
                id: uuidv4(), /* adds a uniqe id for each ToDo, with the uuid only one ToDo will be checked or deleted at once */
                text: action.payload,
                complete: false
            }
            const newItemsList = [...store.items, newItem]
            
            store.items = newItemsList;
        },         
    } 
});
    
