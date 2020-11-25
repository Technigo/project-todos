import { createSlice } from "@reduxjs/toolkit"

export const toread = createSlice({
  name: "toread",
  initialState: {
    books: [
      {
        id: 1,
        title: "Book 1",
        category: "have read",
        isRead: true
      },
      {
        id: 2,
        title: "Book 2",
        category: "want to read",
        isRead: false
      },
      {
        id: 3,
        title: "Book 3",
        category: "reading right now",
        isRead: false
      },
    ],
  },
  reducers:{ //here we define our actions
    //addBook: (state, action) => {
      //const {title} = action.payload
      //state.books = state.books.push({ title })
    //},

    //deleteOne: (state, action) => { // the parameter "state" represents the books-objects in the array. The "const toread" is the entire store. 
      //state.books.filter((book) => book.id !== action.payload) // pop makes them diseapear
    //}
  }
});