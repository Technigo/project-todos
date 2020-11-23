import React from "react";
import { useSelector } from "react-redux";
import { toread } from "../reducers/toread";

export const BookList = () => {
  const books = useSelector( store => store.toread.books ); //what we are using => how we are using it
  console.log(toread)

  return (
    <>Hello</>
  );
};

