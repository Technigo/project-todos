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
  margin: 10px;
`;
const Checkbox = styled.label`
  margin: 15px;
`;

const DeleteButton = styled.button`
  font-size: 16px;
  justify-content: center;
  border: 1px solid white;
  color: white;
  border-radius: 25px;
  padding: 5px;
  background: transparent;
  margin: 0 5px;
`;

const Input = styled.input`
  padding: 40px;
`

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
        Have read
        <Input
          type="checkbox"
          checked={book.isRead}
          onClick={() => setShowReadBooks(!showReadBooks)}
          onChange={handleCheckboxClick}
        ></Input>
      </Checkbox>
      <DeleteButton onClick={() => deleteOneBook(book.id)}>
        Delete book
      </DeleteButton>
    </HandleBookContainer>
  );
};
