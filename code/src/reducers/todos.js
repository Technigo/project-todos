import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    items: [
        {id: 0, text:"call queen mother", isCompleted: false},
        {id: 1, text:"make the app work", isCompleted: false},
        {id: 2, text:"groceries and bolaget", isCompleted: false}
    ]
};

//slice is always composed of input, initialstate and reducers
export const todos = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addItem: (store, action) => {
        
            const newItem = { 
                // spread the current store and return maximum value of array +1 
                id: Math.max(...store.items.map(item => item.id)) + 1,
                text: action.payload,
                isCompleted: false        
                
        }


            const newItemsList = [...store.items, newItem];  
                store.items = newItemsList
                // console.log(newItemsList);
                // console.log(newItem);
        },

        removeItem: (store, action) => {
            const itemId = action.payload
            const filteredItems = store.items
             // filter to update store w/ current data without the removed item
                .filter(item => item.id !== itemId);

                store.items = filteredItems;
        },

        removeAll: (store) => {
            store.items = []
        },

      
        checkCompleted: (store, action) => {
            const id = action.payload
            const todo = store.items.find(items => items.id === id)

                if (todo) {
                    todo.isCompleted = !todo.isCompleted;
                    };
            

                }
               
        
    },
});