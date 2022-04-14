import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";


const data = [
    {
        id: 1,
        name: 'Buy sweets',
        done: false,
    },


    {
        id: 2,
        name: 'Prep the Easter eggs',
        done: false,
    },
    {
        id: 3,
        name: 'Do the egg hunt',
        done: false,
    },
];

const todo = createSlice({
    name: "todo",
    initialState: {
        items: data,
    },
    reducers: {
        toggleItem: (store, action) => {
            store.items.forEach((item) => {
                if (item.id === action.payload) {
                    item.done = !item.done;
                }
            });
        },
        deleteItem: (store, action) => {
            store.items.splice(action.payload, 1);
        },

        addItem: (store, action) => {
            store.items.push(action.payload);

    },
},
});

export default todo;