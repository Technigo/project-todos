import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { CustomCheckbox } from "./CustomCheckbox";
import { toread } from "../reducers/toread";

const HandleBookContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 24px;
  color: white;
`;

const BookTitle = styled.p`
  padding: 0 10px;
`;

const DeleteButton = styled.button`
  font-size: 16px;
  justify-content: center;
  border: none;
  color: white;
  background: transparent;
  padding-left: 60px;
`;

export const HandleBook = ({ book }) => {

  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toread.actions.toggleIsRead(book.id));
  };

  const deleteOneBook = (id) => {
    dispatch(toread.actions.deleteBook(id)); //the value we pass here is the value that's gonna show "payload" in the console.
  };

  return (
    <HandleBookContainer>
      <BookTitle>{book.title}</BookTitle>
      <CustomCheckbox 
        isChecked={book.isRead} 
        onChangeHandler={handleCheckboxClick} 
      />
      <DeleteButton onClick={() => deleteOneBook(book.id)}>
          Delete book
        </DeleteButton>
    </HandleBookContainer>
  );
};
