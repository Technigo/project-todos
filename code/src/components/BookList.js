import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { HandleBook } from "./HandleBook";

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2a3330;
  margin: 0;
  padding: 20px 0;
`;

const SummaryContainer = styled.section`
`

const BookSummary = styled.h2`
  padding: 15px 0;
  color: white;
`;

export const BookList = () => {
  const books = useSelector((store) => store.toread.books); //what we are using => how we are using it
  const totalBooksYouHaveRead = books.filter((book) => book.isRead);

  return (
    <ListContainer>
      {books.map((book, index) => (
        <div key={index}>
          <HandleBook book={book} />
        </div>
      ))}
      <SummaryContainer>
        <BookSummary>
          You have read {totalBooksYouHaveRead.length} books
        </BookSummary>
      </SummaryContainer>
    </ListContainer>
  );
};
