import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { toread } from "../reducers/toread";

const HandleBookContainer = styled.li`
  display: flex;
  flex-direction: row;
  padding: 8px;
  font-size: 24px;
  color: white;
`;

const BookTitle = styled.p`
  padding-right: 20px;
  margin: 15px;
`;
const Checkbox = styled.label`
  margin: 15px;
`;

const DeleteButton = styled.button`
  font-size: 18px;
  justify-content: center;
  border: none;
  border-radius: 25px;
  padding: 0 10px;
`;

export const HandleBook = ({ book }) => {
  const [showReadBooks, setShowReadBooks] = useState(false);

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
      <Checkbox>
        Read
        <input
          type="checkbox"
          checked={book.isRead}
          onClick={() => setShowReadBooks(!showReadBooks)}
          onChange={handleCheckboxClick}
        />
      </Checkbox>
      <DeleteButton onClick={() => deleteOneBook(book.id)}>
        Delete book
      </DeleteButton>
    </HandleBookContainer>
  );
};
