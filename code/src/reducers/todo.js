import { createSlice } from "@reduxjs/toolkit";


const data = [
    {
        id: 'jfksfjs',
        name: 'Buy sweets',
        Done: false
    },

    {
        id: 'jfksfjsfds',
        name: 'Fix all the Easter eggs',
        Done: false
    },

    {
        id: 'jfksfjsfdf',
        name: 'Hide the eggs',
        Done: false
    },
    {
        id: 'jfksfjttt',
        name: 'Host the egg hunt',
        Done: false
    },
];


const todos = createSlice({
    name: 'todos',
    initialState: {
        items: data,
    },
    reducers: {
        toggleItem: (store, action) => {
            store.items.forEach((item) => {
                if (item.id === action.payload) {
                    item.Done = !item.Done;
                }
            });
        },
    },
});

export default todos;