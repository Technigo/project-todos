import {createSlice} from '@reduxjs/toolkit'

export const todos = createSlice({
    name:'todos',
    initialState: {
        username: 'Bam',
        items: [
            {
                id: 1, 
                text: 'Add your first task',
                category: 'task',
                isComplete: false,
                created: 1606387233993
                
            },
            {
                id: 2, 
                text: 'Walk the dog',
                category: 'task',
                isComplete: false,
                created: 1606387233993
            },
            {
                id: 3, 
                text: 'Treat yourself',
                category: 'task',
                isComplete: false,
                created: 1606387233993
            },
        ]
    }, 
    reducers: {
        removeOne: (store, action) => {
            store.items = store.items.filter((item) => item.id !== action.payload)
        },

        addTask: (store, action) => {
            const newTask = {
                id: Math.max(...store.items.map(item => item.id)) + 1,
                text: action.payload,
                category: '',
                isComlete: false,
                created: Date.now()
            }

            const newTaskList = [...store.items, newTask]

            store.items = newTaskList
            // setAddTask=(false)
        },

        removeAll: (store, action) => {
            store.items = []
        },
        
        markComplete: (store, action) => {
            const id = action.payload;
            const task = store.items.find(items => items.id === id)
           
            if (task) {
                task.isComplete = !task.isComplete;
                
            } 
        },
    }
})