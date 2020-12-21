import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { HandleBook } from "./HandleBook";

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 20px 0;
  background: #2a344a;
`;

export const BookList = () => {
  const books = useSelector(store => store.toread.books);

  return (
    <ListContainer>
      {books.map(book => (
        <div key={book.id}>
          <HandleBook book={book} />
        </div>
      ))}
    </ListContainer>
  );
};
