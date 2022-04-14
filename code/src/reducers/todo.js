import { createSlice } from "@reduxjs/toolkit";


const data = [
    {
        id: 'jfksfjs',
        name: 'Buy sweets',
        done: false,
    },


    {
        id: 'jfksfjsfdf',
        name: 'Prep the Easter eggs',
        done: false,
    },
    {
        id: 'jfksfjttt',
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