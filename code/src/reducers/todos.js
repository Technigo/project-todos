import  { createSlice } from '@reduxjs/toolkit';

const data = [
    {
        id: '1',
        title: 'Walk dog',
        whatToDo: 'Should go for a walk with Pedro.',
        tags: ['dog', 'walk'],
        isCompleted: false
    },
    {
        id: '2',
        title: 'Buy new t-shirt',
        whatToDo: 'Need to buy a new t-shirt that should be green.',
        tags: ['shopping', 'go to the mall'],
        isCompleted: true
    }
]

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: data
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
        }
    },
});

export default todos;