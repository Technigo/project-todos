import { createSlice } from "@reduxjs/toolkit"

export const toread = createSlice({
  name: "toread",
  initialState: {
    username: "Caroline",
    books: [
      {
        id: 1,
        title: "Book 1"
      },
      {
        id: 2,
        title: "Book 2"
      },
      {
        id: 3,
        title: "Book 3"
      },
    ],
  },
  reducers:{ //here we define our actions
    deleteOne: (state, action) => { // the parameter "state" represents the books-objects in the array. The "const toread" is the entire store. 
      state.books.pop(); // pop makes them diseapear
    }
  }
});