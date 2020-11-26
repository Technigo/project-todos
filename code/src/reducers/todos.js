import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: []
}

//slice is always composed of name, initialstate and reducers
export const todos = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addItem: (store, action) => {
             // console.log(action);
            const newItem = {
                // spread the current store and return maximum value of array
                id: Math.max(...store.items.map(item => item.id)) + 1,
                name: action.payload,
                isCompleted: false
            }
            const newItemsList = [...store.items, newItem];  
            store.items = newItemsList
        },
/*store is todos object inside of slice, can also be named state as the same*/ 
        removeItem: (store, action) => {
              // conslole.log(store.action)
            const filteredItems = store.items
             // filter to update store w/ current data without the removed item
                .filter(item => item.id !== action.payload);

                store.items = filteredItems;
        },
        toggleComplete: (store, action) => {
            const updatedArray = store.items.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isCompleted: !item.isCompleted
                    };
                } else {
                    return item;
                }
            });

            store.items = updatedArray;
        },
    },
});