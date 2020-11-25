import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { toread } from "../reducers/toread"

import { HandleBook } from "./HandleBook"
import { FilterBooks } from "./FilterBooks"
import { DeleteBooks } from "./DeleteBooks"

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: pink;
  margin: 0;
  padding: 20px 0;
`;

export const BookList = () => {
  const books = useSelector( store => store.toread.books ); //what we are using => how we are using it
  console.log(toread)

  return (
  <ListContainer>
    {books.map((book, index) => (
      <div key={index}>
        <HandleBook book={book} key={index} />
        <FilterBooks book={book}/>
      </div>
    ))}
  </ListContainer>
  );
};

