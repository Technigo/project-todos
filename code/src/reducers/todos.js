import { createSlice } from "@reduxjs/toolkit";

const categories = [
    {
      id: 1,
      name: "# Free time",
      subcategories: [
        {
          id: 1,
          name: "# Family",
        },
        {
          id: 2,
          name: "# Friends",
        },
        {
          id: 3,
          name: "# Travel",
        },
      ],
    },
    {
      id: 2,
      name: "# Work",
      subcategories: [
        {
          id: 1,
          name: "# Priorities",
        },
      ],
    },
    {
      id: 5,
      name: "# Shop",
      subcategories: [
        {
          id: 1,
          name: "# For the kids",
        },
        {
          id: 2,
          name: "# Groceries",
        },
      ],
    }
]

const initialState = {
    username: "name",
    items: [
      {
        id: 1,
        date: Date.now(),
        title: "first",
        content: "",
        isComplete: false,
        category: "Work",
        dueDate: "2020-12-24",
      },
      {
        id: 2,
        date: Date.now(),
        title: "second",
        content: "",
        isComplete: false,
        category: "Free time",
        dueDate: "2020-12-20",
      },
      {
        id: 3,
        date: Date.now(),
        title: "third",
        content: "Bake cookies with kids",
        isComplete: false,
        category: "Shop",
        dueDate: "2020-12-01",
      },
    ],
    addItem: false,
    categories,
} 

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // goToForm: (state) => {
    //     addTodo === false
    // },
    
    removeItem: (store, action) => {
      const filteredList = store.items.filter((item) => item.id !== action.payload); 
      store.items = filteredList; //!!!
    },
    addItem: {
      reducer(store, action) {
        store.items = [...store.items, action.payload];
    },
    prepare(title, content) {
      return {
        payload: {
          id: Date.now(),
          title: title,
          content: content,
          isComplete: false 
        }
      };
    }},
    // In Jennies video, this is attached to an AddItemForm -> submitbutton
    // addItem: (store, action) => {
    //     console.log("This is action payload" + action.payload)
    //     const newItem = action.payload;
    //     const newItemsList = [...store.items, newItem];
    //     store.items = newItemsList;
    //     console.log("I am newitemslist" + newItemsList);
    //   },
     updateItem: (store, action) => {
       const { id, title, content, category, dueDate, isComplete } = action.payload
       const currentTodo = store.items.find(item => item.id == parseInt(id));
       
       console.log(title, content, currentTodo)
       if (currentTodo) {
         currentTodo.title = title
         currentTodo.content = content
         currentTodo.category = category
         console.log(currentTodo.title + title);
       }
      
      }
   
  
    }
})      





