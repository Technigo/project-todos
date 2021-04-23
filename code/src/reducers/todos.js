import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: []
    },
    reducers: {
        // "store" argument keeps inside all of the data from slice store (initialState)
        // "action" argument keeps inside two properties :
        // payload - all of the data passed as an argument (TodoList.js, line 22),
        // type - internal indentifier thanks to which redux know what reducer should it call
        toggleComplete: (store, action) => {

            // v1 - Immutability
            // Create new array updatedItems from old store.items
            const updatedItems = store.items.map(todo => {
                // If element from array has same id as id passed in action.payload,
                // then update it
                if (todo.id === action.payload) {
                    // This part of code is exactly the same as we would write :
                    // {
                    //   todo.id,
                    //   todo.description,
                    //   todo.isComplete,
                    //   todo.isComplete: !todo.isComplete
                    // }
                    
                    // Third property (line 25) will be overwritten by fourth (line 26),
                    // so the final result is :
                    // {
                    //   todo.id,
                    //   todo.description,
                    //   todo.isComplete: !todo.isComplete
                    // }
                    return {
                        ...todo,
                        isComplete: !todo.isComplete
                    }
                } else {
                    // Return whole element without changing it
                    return todo;
                }
            });
            // Finally, update whole store.items property and assign it new value - updatedItems array
            store.items = updatedItems;

            // v2 - Mutability
            // store.items.forEach(todo => {
            //     if (todo.id === action.payload) {
            //         todo.isComplete = !todo.isComplete;
            //     }
            // });
        },
        removeTodo: (store, action) => {
            // v1 - Immutability
            // const decreasedItems = store.items.filter(todo => todo.id !== action.payload);

            // store.items = decreasedItems;

            //v2 - Mutability
            store.items.splice(action.payload, 1);
        },
        addTodo: (store, action) => {
            console.log(action);
            // v1 - Immutability
            // store.items = [...store.items, action.payload];

            // v2 - Mutability
            store.items.push(action.payload);
        }
    }
});

export default todos;