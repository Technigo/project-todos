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
            state.items = [...state.items, action.payload]
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


        // sort: (store, action) => {

            
        //     if (action.payload === 'DONE') {
                
        //             // store.items.filter(t => t.status)
        //             const finishedTasks = 
                    
        //             store.items.filter(t => t.status)

        //             return finishedTasks
                
        //     }
        //     else if (action.payload === 'UNDONE'){
                 
        //             // store.items.filter(t => !t.status)
        //             const unfinishedTasks = 
                    
        //             store.items.filter(t => !t.status)

        //             return unfinishedTasks

        //         }
        //     else {             
        //         const allTasks = store.items

        //         store.items = allTasks
        //     }
            
        // },




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

        // toggleState: (store, action) => {

        //     store.items.forEach(item => {
        //         if (item.id === action.payload){
        //             item.status = !item.status
        //         }
        //     })  
        //     },
   
// finisheditems: []
// unfinisheditems: []
// toggleUNFIN: (store, action) => {

//     store.unfinisheditems = store.items.map(item => {
     
//         [!item.status]
//     }
// },