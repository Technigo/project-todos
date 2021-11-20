import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid';

//I´m creating a function, that basically is an object -though a rather big one:
//every state contains of three things: name, initialState(object/array), reducers (anonymous function)
const Todos = createSlice ({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducers: {//this is built as an object, so I'm going to construct its properties, inside
        addTodo: (store, action) => {//we need to pass data about "what to do"
            
            const newTodo = {
                id: uniqid(), //I installed the "uniqid" to be able to use it here
                text: action.payload,
                isComplete: false,
            }
                store.items = [...store.items, newTodo]; // this makes it immutable, by making a new array
        },
    },
});

export default Todos;