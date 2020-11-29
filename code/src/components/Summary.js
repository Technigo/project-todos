import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SummaryContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 0;
  background: #3C4A6B;
  margin: 0;
`;

const BookSummary = styled.h2`
  padding: 15px 0;
  background: #3C4A6B;
  color: #FDFFF3;
  text-transform: uppercase;
  margin: 0;
  font-size: 22px;
`;

const Footer = styled.section`
  display: flex;
  justify-content: center;
  background: #E6E6E6;
  padding: 60px 0;
  color: #3C4A6B;
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
