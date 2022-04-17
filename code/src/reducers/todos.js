import  { createSlice } from '@reduxjs/toolkit';
import uniqid from "uniqid";

const data = [
    {
        id: uniqid(),
        whatToDo: 'Should go for a walk with Pedro.',
        tags: ['dog', 'walk'],
        isCompleted: false,
        createdAt: Date.now()
    },
    {
        id: uniqid(),
        whatToDo: 'Need to buy a new t-shirt.',
        tags: ['shopping'],
        isCompleted: true,
        createdAt: Date.now()
    },
    {
        id: uniqid(),
        whatToDo: 'Buy food.',
        tags: ['shopping'],
        isCompleted: false,
        createdAt: Date.now()
    }
]

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: data,
        tag: '',
    },
    reducers: {
        markAsCompleted: (store, action) => {
            store.items.forEach(item => {
                if (item.id === action.payload) {
                    item.isCompleted = !item.isCompleted
                }
            })
        },
        addTodo: (store, action) => {
            store.items.push(action.payload);
        },
        deleteTodo: (store, action) => {
            store.items.splice(action.payload, 1);
        },
        filterTags: (store, action) => {
            store.tag = action.payload;
        },
        clearTagFilter: (store, action) => {
            store.tag = '';
        }
    },
});

export default todos;