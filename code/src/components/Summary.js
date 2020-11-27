import React from "react"
import { useSelector } from "react-redux";
import styled from "styled-components";

const SummaryContainer = styled.section`
display: flex;
justify-content: center;
padding: 40px 0;
background: white;
margin: 0;
`;

const BookSummary = styled.h2`
  padding: 15px 0;
  color: #4D5E58;
  text-transform: uppercase;
  margin: 0;
`;

const Footer = styled.section`
  background: #2a3330;
  padding: 60px 0;
`

export const Summary = () => {
  const books = useSelector(store => store.toread.books);
  const selectedBooksRead = books.filter((book) => book.isRead);

  return (
    <>
      <SummaryContainer>
        <BookSummary>
          You have read {selectedBooksRead.length} books <span role="img" aria-label="book emoji">📚</span>
        </BookSummary>
      </SummaryContainer>
      <Footer>    
      </Footer>
  </>
  )
}