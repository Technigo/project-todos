import { createSlice } from  '@reduxjs/toolkit';

const initialState = {
    items:[
       { id:'1', name:'A first todo', isComplete: false},
       
    ]
}

export const todos = createSlice ({
    name: 'todos',
    initialState,
    reducers :{
        removeItem: (store, action) =>{
            const itemId = action.payload;
            const filteredList = store.items.filter(item => item.id !== itemId);
            store.items = filteredList;
            

        },
        addItem: (store, action) => {
            const newItem = {
                id: Math.max(...store.items.map(item =>item.id)) + 1,
                name: action.payload,
                isComplete: false
            }
            const newItemsList =[...store.items, newItem]
            store.items= newItemsList;
        },
            toggleComplete: (state, action) => {
                const updatedArray = state.items.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            isComplete: !item.isComplete
                        };
                    } else {
                        return item;
                    }
                });
    
                state.items = updatedArray;
        } 
    }
});