import { createSlice } from "@reduxjs/toolkit";

// const data =  [
//     {
//         id: 'jjfjdj',
//         text: 'Name three good things about yourself',
//         isComplete: false,  
//     }, 
//     {
//         id: 'kfjkfkf',
//         text: 'Take a well deserved rest',
//         isComplete: false,  
//     }
// ]

const tasks = createSlice({
    name: 'tasks',
    initialState: {
        items: [], //data 
    },
    //Reducers give us information about different things that can update the store/(initial)state. These are actions related.
    reducers: {
        addTask: (store, action) => {
            const newTask = {
                // id: 'jndjdn',
                text: action.payload,
                isComplete: false,
            };

            store.items = [...store.items, newTask]            
        },

        toggleTask: (store, action) => {
            store.items.forEach(item => {
                if(item.text === action.payload) {
                    item.isComplete = !item.isComplete
                }
            })


            // const updatedItems = store.items.map((item) => {
            //     if (item.id === action.payload) {
            //         const updatedTask = {
            //             ...item,
            //             isComplete: !item.isComplete
            //         };
            //         return updatedTask;
            //     } else {
            //         return item;
            //     }
            // })
            // store.items = updatedItems;
        },

        deleteTask: (store, action) => {
            const decreasedItems = store.items.filter((item) => item.text !== action.payload);
            store.items = decreasedItems;
        },

        removeAll: (store) => {
            store.items = [];
        }
    },
});

export default tasks;
