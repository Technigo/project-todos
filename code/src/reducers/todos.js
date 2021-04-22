import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
    name:'todos',
    initialState: {
        items: [
            { id: 1, description: 'Groceries🍎', isComplete: false },
            { id: 2, description: 'Coding💻', isComplete: true },
            { id: 3, description: 'Housekeeping🏠', isComplete: false },
            { id: 4, description: 'Workout🤸‍♀️', isComplete: false }
        ],

    },
    reducers: {
        toggleComplete: (store, action) => {
            //v1 - immutability
            const updatedItems = store.items.map(todo => {
                if(todo.id === action.payload) {
                    //update iscOMPLETE property
                    return {
                        ...todo,
                        isComplete: !todo.isComplete
                    }
                } else {
                    return todo;
                    //leave it as it was
                }
            });
            //this store here is the main difference between mutability and immutability
            // (this one is only valid for immutability)
            store.items = updatedItems;
           //v2 mutability
            //store.items.forEach(todo => {
               // if (todo.id === action.payload) {
                    //  todo.isComplete = !todo.isComplete;
                //}
           // })
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