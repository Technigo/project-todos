import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { toread } from "../reducers/toread";

import { HandleBook } from "./HandleBook";
import { FilterBooks } from "./FilterBooks";
import { DeleteBooks } from "./DeleteBooks";

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2A3330;
  margin: 0;
  padding: 20px 0;
`;

export const BookList = () => {
  const books = useSelector((store) => store.toread.books); //what we are using => how we are using it

  const dispatch = useDispatch();

  const deleteOneBook = (id) => {
    dispatch(toread.actions.deleteBook(id)); //the value we pass here is the value that's gonna show "payload" in the console.
  };

  return (
    <ListContainer>
      {books.map((book, index) => (
        <div key={index}>
          <HandleBook book={book} key={index} />
          <FilterBooks book={book} />
          <button onClick={() => deleteOneBook(book.id)}>Delete book</button>
        </div>
      ))}
    </ListContainer>
  );
};
