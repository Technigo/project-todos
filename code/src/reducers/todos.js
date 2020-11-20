import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    name: "My Todo list",
    items: [
      {
        description: "my first todo",
        complete: false,
        category: 'Personal',
      },
    ],
    categories: ['Personal', 'School', 'Work', 'Home', 'All'],
    homePage: false,
  }
};

/*ATT GÖRA*/
//lägg till mer filter möjligheter DUE DATE(är detta möjligt), COMPLETE/NOT COMPLETE
//möjlighet att makerar klar, ta bort alt ta bort alla
//Välja Due Date på sida två när jag skapar min kategori (datepicker)

/*HAR VI GJORT*/
//Skapa en landning sida som visar alla todos (check)
//visa dagens datum (check)
//filtrera på kategori  (första sidan) (check)
//När jag vill lägga till todo skickas jag till sida 2 (check)
//när jag lägger till todo skickas tillbaka till första sidan (check)



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
    createTodo: (state) => {
      state.homePage = true;
    },
    
    navHomePage: (state) => {
      state.homePage = false
    }
 

  }
})