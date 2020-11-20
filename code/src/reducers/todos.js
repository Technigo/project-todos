import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    name: "My Todo list",
    items: [
      {
        description: "my first todo",
        complete: false,
        //category: 
      },
      {
        description: "my second todo",
        complete: false
      },
    ]
  }
};

//Skapa en landning sida som visar alla todos 
//filtrera på kategori och eller due date (första sidan)
//möjlighet att makerar klar, ta bort alt ta bort alla
//När jag vill lägga till todo skickas jag till sida 2
//sida två väljer kateogir, due date och task name.
//när jag lägger till todo skickas tillbaka till första sidan 

// lägg till kategorier 
//filtrera på kategorier (på första sidan)
//Radera alla todos
//Lägg till datum (när jag skapar)
//Styla checkbox (custom checkbox)'
//

export const todos = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const { todoItemInfo } = action.payload;
      state.list.items.push(todoItemInfo)
    },
    setComplete: (state, action) => {
      const { itemIndex, complete } = action.payload;
      state.list.items[itemIndex].complete = complete;
      console.log(itemIndex)
    },
    removeTodo: (state, action) => {
      const { itemIndex } = action.payload;
      state.list.items = state.list.items.filter(
        (item, index) => index !== itemIndex
      )
    },
    // removeAllTodos: (state, action) => {
    //   state.items[]
    // }
 

  }
})