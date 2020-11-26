import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    name: "Todo list",
    items: [],
    categories: ['Personal', 'School', 'Work', 'Home', 'Other' ],
  }
};


export const todos = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const { todoItemInfo } = action.payload;
      state.list.items.push(todoItemInfo)
    },

    // setComplete: (state, action) => {
    //   const { id, complete } = action.payload;
    //   //state.list.items[id].complete = complete;
    //   console.log(id)
    // },
    
    
    setComplete: (state, action) => {
      const foundItem = state.list.items.find(item => item.id === action.payload)
      //console.log(action.payload)
      //console.log(`innan if ${foundItem}`)
      if(foundItem) {
        foundItem.complete = !foundItem.complete
      }
      //console.log(`efter if ${foundItem}`)
    },

    setAllComplete: (state) => {
      state.list.items.map(item => item.complete = true)
    },

    setAllUnComplete: (state) => {
      state.list.items.map(item => item.complete = false)
    },

    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.list.items = state.list.items.filter(
        item => item.id !== id
      )
    },

    removeAllTodos: (state) => {
      state.list.items = []
    },

    createTodo: (state) => {
      state.homePage = true;
    },

    filterTodoStatus: (state, action) => {
      const { filter } = action.payload; 
      if (filter === "not complete") {
        console.log("filter not complete")
        return state.list.items.filter(item => !item.complete)
      } else if (filter === "complete" ) {
        console.log("filter complete")
        return state.list.items.filter(item => item.complete) 
      } else return state.list.items
    }
    
    


    // filterTodoStatus: (state, action) => {
    //   const filter = action.payload;
    //   switch (filter) {
    //     case filter === "completed":
    //       return state.list.items.filter(item => item.complete) //if item is equal to true
    //       break;
    //     case filter === "not completed":
    //       return state.list.items.filter(item => !item.complete) //if item is equal to false
    //       break;
    //     default:
    //       return state.list.items
    //       break;
    //   }
    // },
    
  
  }
})
