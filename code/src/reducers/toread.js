import { createSlice } from "@reduxjs/toolkit";

export const toread = createSlice({
  name: "toread",
  initialState: {
    books: [
      {
        id: 1,
        title: "Nocturner",
        isRead: true,
      },
      {
        id: 2,
        title: "The white book",
        isRead: true,
      },
      {
        id: 3,
        title: "The Great Gatsby",
        isRead: false,
      },
      {
        id: 4,
        title: "Swede Hollow",
        isRead: true,
      },
      {
        id: 5,
        title: "In the fold",
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

      store.books = newBookList;
    },

    deleteBook: (store, action) => {
      const bookId = action.payload;
      const filteredList = store.books.filter((book) => book.id !== bookId);

      store.books = filteredList;
    },

    toggleIsRead: (store, action) => {
      const updatedStatus = store.books.map((book) => {
        if (book.id === action.payload) {
          return {
            ...book,
            isRead: !book.isRead,
          };
        } else {
          return book;
        }
      });
      store.books = updatedStatus;
    },
  },
});
