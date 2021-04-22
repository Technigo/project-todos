import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: []
};

export const todos = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {

        addTodoItem: (store, action) => {
            const { newTodo }  = action.payload;
                const newTodoList = [...store.items, newTodo];
                store.items = newTodoList;
        },

        toggleComplete: (store, action) => {
            const updatedItems = store.items.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete
                    }                   
                } else {
                    return todo;

                }
            });
            store.items = updatedItems;
        },     
        
        removeTodo: (store,action) => {
            const decreasedItems = store.items.filter(todo => todo.id !== action.payload);
            store.items = decreasedItems;
        }
    },
});