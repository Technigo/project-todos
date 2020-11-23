import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {
    name: "Todo list",
    items: [
      {
        description: "my first todo",
        complete: false,
        category: 'School',
        dueDate: '',
      },
      {
        description: "my second todo",
        complete: false,
        category: 'Personal',
        dueDate: '',
      },
      {
        description: "my third todo",
        complete: false,
        category: 'Work',
        dueDate: '',
      },
    
    ],
    categories: ['All' ,'Personal', 'School', 'Work', 'Home' ],
    homePage: false,
  }
};

/*ATT GÖRA*/
//lägg till mer filter möjligheter DUE DATE(är detta möjligt), COMPLETE/NOT COMPLETE
//Ta bort category och description i initialState. (starta tomt) (null???)
//confirmation alert när man klickar på "remove all"


/*HAR VI GJORT*/
//Skapa en landning sida som visar alla todos (check)
//visa dagens datum (check)
//filtrera på kategori  (första sidan) (check)
//När jag vill lägga till todo skickas jag till sida 2 (check)
//när jag lägger till todo skickas tillbaka till första sidan (check)
//möjlighet att makerar klar, ta bort alt ta bort alla
//Välja Due Date på sida två när jag skapar min kategori (datepicker)
//möjlighet att filterar på ALL kategorier






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

    removeAllTodos: (state) => {
      state.list.items = []
    },

    createTodo: (state) => {
      state.homePage = true;
    },
    
    navHomePage: (state) => {
      state.homePage = false;
    }
  }
})