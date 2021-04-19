import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
    name:'todos',
    initialState: {
        items: [
            { id: 1, description: 'First task', isComplete: false },
            { id: 2, description: 'Second task', isComplete: true },
            { id: 3, description: 'Third task', isComplete: false }
        ],

    },
    reducers: {
        toggleComplete: (store, action) => {
            const updatedItems = store.items.map(todo => {
                if(todo.id === action.payload) {
                    //update iscOMPLETE property
                } else {
                    //leave it as it was
                }
            })

        }
    }
});

export default todos;