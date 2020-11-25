import React from "react"
import styled from "styled-components";

const FilterBooksContainer = styled.a`
  padding: 8px 0;
  font-size: 24px;
  color: black;
`;


export const FilterBooks = ({ book }) => {
  return (
    <FilterBooksContainer>{book.isRead ? "Read" : "Want to read"}</FilterBooksContainer>
  
  )
}
