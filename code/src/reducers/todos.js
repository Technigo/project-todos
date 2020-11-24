import {createSlice} from '@reduxjs/toolkit'


export const todos = createSlice({
    name: 'todos',
    initialState: {
      username: 'moa',
      items: [
        { id: 1,text: 'The first todo', completedTask: false},
        { id: 2, text: 'The second todo', completedTask: false },
        { id: 3, text: 'The third todo', completedTask: false },
      ],
    },
    reducers: {
      addItem: (state, action) => {
        const { text } = action.payload
        state.items.push({ id:Date.now(), text })
        },
      removeItem: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
      },
    
      removeAll: (state, action) => {
          state.items = []
      },
      toggleCompleted: (state, action) => {
          const foundItem = state.items.find((item) => item.id === action.payload)

          if (foundItem) {
              foundItem.completedTask = ! foundItem.completedTask
          }
      },
    },
})


/*
const tasks = [
  {
    id:1, 
    text:'todo',
    complete: true,
  },
  {
    id:2, 
    text:'todo2',
    complete: false,    
  }
]

const initialState = {
    tasks,
    completedTasks: false   
}


export const todos = createSlice({
    name:'todos',
    initialState, 
    reducers: {
      removeOne: (state, action) => {
          state.items.pop();
      },
    },  
})

*/