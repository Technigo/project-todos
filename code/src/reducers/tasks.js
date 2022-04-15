import { createSlice } from '@reduxjs/toolkit'

const taskList = [
    {id: 0, title: 'Laundry', status: false},
    {id: 1, title: 'Shopping', status: true},
    {id: 2, title: 'Paint', status: false},

]

export const tasks = createSlice({
    name: 'tasks',
    initialState: {
    items: taskList
    },
    reducers: {
        addTask: (state, action) => {
            state.items.push(action.payload)
        },

        toggleState: (store, action) => {

        store.items.forEach(item => {
            if (item.id === action.payload){
                item.status = !item.status
            }
        })  
        },

        sort: (store, action) => {

            if (action.payload === 'DONE') {
                return (
                    store.items.filter(t => t.status)
                )
            }
            else if (action.payload === 'UNDONE'){
                return (
                    store.items.filter(t => !t.status)
                )}
            else { return  store.items 
            }
        }

        // filterTodos: (store, filter) => {

        //     if (filter.payload === 'DONE') {
                
        //     return store.items.filter(t => t.status);
                 
        //     } else if (filter.payload === 'UNDONE') {

        //     return store.items.filter(t => !t.status);

        //     } else { return null }
    
        // }

        // sortFinished: (store, action) => {
          
        //     store.items.filter((item) => {
        //         taskList.item.status = true
        //     }))

        //     })  

        // }
        // sort: (store, action) => {

        //     if (action.payload === 'DONE') {
        //         return (setFiltered(finishedTasks))
        //     }
        //     else if (action.payload === 'UNDONE'){
        //         return setFiltered(unfinishedTasks)
        //     }
        //     else { return setFiltered(allTasks) 
        //     }
        // }
    }

}
)