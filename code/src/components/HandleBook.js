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
  color: #fdfff3;
`;

const BookTitle = styled.p`
  padding: 0 10px;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

const DeleteButton = styled.button`
  margin-left: auto;
  color: #fdfff3;
  font-size: 16px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    font-weight: bold;
  }
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
      <CustomCheckbox
        isChecked={book.isRead}
        onChangeHandler={handleCheckboxClick}
      />
      <BookTitle checked={book.isRead}>{book.title}</BookTitle>
      <DeleteButton onClick={() => deleteOneBook(book.id)}>x</DeleteButton>
    </HandleBookContainer>
  );
};
