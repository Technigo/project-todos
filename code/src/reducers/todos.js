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
            store.items = updatedItems;
        }
    }
});

export default todos