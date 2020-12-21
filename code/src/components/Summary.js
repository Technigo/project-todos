import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SummaryContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 40px 0;
  background: #3c4a6b;
`;

const BookSummary = styled.h2`
  margin: 0;
  padding: 15px 0;
  font-size: 22px;
  color: #fdfff3;
  text-transform: uppercase;
  background: #3c4a6b;
`;

const Footer = styled.section`
  display: flex;
  justify-content: center;
  padding: 60px 0;
  color: #3c4a6b;
  background: #e6e6e6;
`;

export const Summary = () => {
  const books = useSelector((store) => store.toread.books);
  const selectedBooksRead = books.filter((book) => book.isRead);

  return (
    <>
      <SummaryContainer>
        <BookSummary>
          You have read {selectedBooksRead.length} books{" "}
          <span role="img" aria-label="book emoji">
            📚
          </span>
        </BookSummary>
      </SummaryContainer>
      <Footer> © Caroline Birgersson, Technigo</Footer>
    </>
  );
};
