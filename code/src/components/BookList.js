import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { toread } from "../reducers/toread"

import { HandleBook } from "./HandleBook"
import { DeleteBooks } from "./DeleteBooks"

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  background: pink;
  margin: 0;
  padding: 20px;
`;

export const BookList = () => {
  const books = useSelector( store => store.toread.books ); //what we are using => how we are using it
  console.log(toread)

  return (
  <ListContainer>
    {books.map((book, index) => (
      <HandleBook book={book} key={index} ></HandleBook>
    ))}
  </ListContainer>
  );
};

