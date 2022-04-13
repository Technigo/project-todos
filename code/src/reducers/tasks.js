import { createSlice } from "@reduxjs/toolkit";

const data =  [
    {
        id: '1234',
        text: 'Name three good things about yourself',
        isComplete: false,  
    }, 
    {
        id: '2345',
        text: 'Take a well deserved rest',
        isComplete: false,  
    }
]

const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: data
    },
    //Reducers give us information about different things that can update the store/(initial)state. These are actions related.
    reducers: {
        addTask: (store, action) => {
            // v1 - Mutability
            // store.items.push(action.payload);

            // v2 Immutability
            store.items = [...store.items, action.payload];        
        },

        toggleTask: (store, action) => {
            // v1 Mutability approach: 
            // store.items.forEach(item => {
            //     if(item.text === action.payload) {
            //         item.isComplete = !item.isComplete
            //     }
            // })

            // v2 Immutability
            const updatedItems = store.items.map((item) => {
                if (item.id === action.payload) {
                    const updatedItem = {
                        ...item,
                        isComplete: !item.isComplete,
                    };
                    return updatedItem;
                } else {
                    return item;
                }
            });

            store.items = updatedItems;
        },

        deleteTask: (store, action) => {
            // v1 - Mutability
            // store.items.splice(action.payload, 1);
            
            // v2 Immutability
            const updatedItems = store.items.filter(
                item => item.id !== action.payload);

            store.items = updatedItems;
        },
        
        removeAll: (store) => {
            store.items = [];
        }
    },
});

export default tasks;
