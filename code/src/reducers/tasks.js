import { createSlice } from '@reduxjs/toolkit'

const taskList = [
    {id: 0, title: 'Laundry', status: false},
    {id: 1, title: 'Shopping', status: true},
   

]

export const tasks = createSlice({
    
    name: 'tasks',
    initialState: {
    items: taskList

    },
    reducers: {

        addTask: (state, action) => {
            state.items = [...state.items, action.payload]
        },

        removeTask: (state, action) => {

            const tasksOneRemoved = state.items.filter((i) => i.id !== action.payload )

            state.items = tasksOneRemoved
       
        },

        toggleState: (store, action) => {

            const updatedItems = store.items.map(item => {

                    if (item.id === action.payload) {

                        const updatedItem = {
                            ...item, 
                            status: !item.status,
                        }
                        return updatedItem

                    } else { return item }
                
                })  

            store.items = updatedItems
            

        },

        removeAll: (store) => { store.items = []},
    }

}
)

