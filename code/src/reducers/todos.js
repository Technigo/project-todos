import { createSlice } from '@reduxjs/toolkit' // We always import this one when we are creating reducers

const todos = createSlice({ // A createSlice should always have a name, initialState & reducers (3 parts)
    name: 'todos',
    initialState: {
        items: [
            { id: 1, description: 'First task', isComplete: false },
            { id: 2, description: 'Second task', isComplete: true },
            { id: 3, description: 'Third task', isComplete: false }
        ]
    },
    reducers: { // Here we need to find the item we chose and change from true to false and vs
        toggleComplete: (store, action) => {
            const updatedItems = store.items.map(todo => { // According to Maks, this one is exactly the same as happy thoughts project when we are posting data, if thats true, check that one and try to se how we can add new text to this.
                if (todo.id === action.payload){ // todo.id === action.payload betyder ifall id på vår items och den vi trycker på är samma. 
                    return {
                        ...todo, // Spreading means: We are iterating through all our parts in our item, vi first go through our item and we let it be as it is, then we go through our description and we do the same by letting it be, then the same with isComplete
                        isComplete: !todo.isComplete // then here, after spreading, we check what isComplete is, then what we do after is that we change it to opposite, which means that if it is true it will be false and vice versa
                    }
                } else {
                    return todo
                }
            })

            store.items = updatedItems // Genom att göra såhär så updaterar vi vår store.items på rad 6 med nya värden som vi tryckt in på updatedItems
        }
    }
});

export default todos