import { createSlice } from "@reduxjs/toolkit";

export const toread = createSlice({
  name: "toread",
  initialState: {
    books: [
      {
        id: 1,
        title: "Book 1",
        category: "have read",
        isRead: true,
      },
      {
        id: 2,
        title: "Book 2",
        category: "want to read",
        isRead: true,
      },
      {
        id: 3,
        title: "Book 3",
        category: "reading right now",
        isRead: false,
      },
    ],
  },
  reducers: {
    addBook: (store, action) => {
      const newBook = {
        id: Math.max(...store.books.map((book) => book.id)) + 1,
        title: action.payload,
        isRead: false,
      };
      const newBookList = [...store.books, newBook];
      console.log(newBookList);

      store.books = newBookList;
    },

    deleteBook: (store, action) => {
      //action is passed from react-app, store/state is a default value like "event" therefor you don't need to pass it) => { // the parameter "state" represents the books-objects in the array. The "const toread" is the entire store.
      console.log(store, action);
      const bookId = action.payload;

      const filteredList = store.books.filter((book) => book.id !== bookId);
      // This filter checks if the item id, of each element inside our store.books-array is not equal to variable bookId.
      // We should allow every element that has not the id,
      // and every element that has the same id as the payload should be filtered out.
      console.log(filteredList);

      store.books = filteredList;
    },

    toggleIsRead: (store, action) => {
      const updatedStatus = store.books.map(book => {
        if (book.id === action.payload) {
          return {
            ...book,
            isRead: !book.isRead
          };
        } else {
          return book;
        }
    })
    store.books = updatedStatus
  },
},
});
