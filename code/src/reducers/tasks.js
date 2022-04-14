import { createSlice } from "@reduxjs/toolkit";

const data = [
    {
        id: "lahjs275234x",
        task: "Finish to do-app",
        isDone: false,
    },
    {
        id: "lahjs27kjahs24x",
        task: "Finish sewing dress",
        isDone: false,
    },
];

const tasks = createSlice({
    name: "tasks",
    initialState: {
        items: data,
    },
    reducers: {
        toggleItem: (store, action) => {
        // console.log("Store:", store);
        // console.log("Action:", action);

            store.items.forEach((item) => {
                if (item.id === action.payload) {
                item.isDone = !item.isDone;
                }
            });
        },
        deleteItem: (store, action) => {
            console.log("wtf");
            store.items.splice(action.payload, 1);
        },
        addItem: (store, action) => {
            store.items.push(action.payload);
        }
    },
});

export default tasks;
