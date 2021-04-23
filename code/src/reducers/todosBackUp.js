import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [
            { id: 1, description: 'First task', isComplete: false },
            { id: 2, description: 'Second task', isComplete: false},
            { id: 3, description: 'Third task', isComplete: false }
        ],
        addLabel: ''
    },
    reducers: {
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
            store.items = updatedItems
        },

        //use underscore if not using the action
        addToDo: (store, _) => {
            store.items = [
                ...store.items,
                { id: store.items.length + 1, description: store.addLabel, isComplete: false }
            ]
            store.addLabel = ''
        },
        setAddLabel: (store, action) => {
            store.addLabel = action.payload 
        },
        removeToDo: (store, action) => {
            store.items = store.items.filter(item => item.id !== action.payload)
        }
    }
    
});

export default todos;