import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import todos from "reducers/todos";

const WrapperAllNotes = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

const ListedItems = styled.article`
  position: relative;
  border: none;
  border-bottom: 1px solid #ad6122;
  /* border-top: 2px solid blue; */
  width: 70vw;
  padding: 10px;
  margin-bottom: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const NoteTitle = styled.h2`
  font-weight: 400;
  margin: 0 0 10px 0;
  text-transform: capitalize;
  text-decoration: underline;
  color: #ad6122;
  white-space: pre-wrap;
`;

const Description = styled.p`
  font-size: 18px;
  margin: 0 0 10px 0;
`;

const Date = styled.p`
  font-size: 12px;
  font-style: italic;
  color: #606060;
`
// const CheckWrapper = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: flex-end;
// /* border: 2px solid; */
// width: 70vw;
// padding: 5px 0;

// `
const CheckLabel = styled.label`
  font-size: 12px;
  position: absolute;
  right: 0;
  bottom: 20px;
  color: #606060;

`;

const DeleteButton = styled.button`
  position: absolute;
  font-family: 'Jost', sans-serif;
  color: #606060;
  top: 5px;
  color: blue;
  font-size: 12px;
  right: 0;
  background: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: yellow;
    /* border: 1px solid black; */
    border-radius: 2px;
  }
`;

const ListItem = () => {
  const listItems = useSelector((backpack) => backpack.todos.items);

  const dispatch = useDispatch();

  const onToDoToggle = (noteId) => {
    dispatch(todos.actions.toggleItem(noteId));
  };

  const onNoteDelete = (index) => {
    dispatch(todos.actions.deleteItem(index));
  };

  const date = moment().format("MMMM Do YYYY, h:mm:ss a");

  return (
    <WrapperAllNotes>
      {listItems.map((newNote, noteIndex) => (
        <ListedItems key={newNote.id}>
          <Wrapper>
            <NoteTitle>{newNote.name}</NoteTitle>
            <Description>{newNote.description}</Description>
           
            <Date>{date}</Date>
              <CheckLabel>
                Done deal:
                <input
                  type="checkbox"
                  checked={newNote.isDone}
                  onChange={() => onToDoToggle(newNote.id)}
                />
              </CheckLabel>
            
          </Wrapper>
          <DeleteButton onClick={() => onNoteDelete(noteIndex)}>
            {/* <span role="img" aria-label="delete">❌</span> */}
            X
          </DeleteButton>
        </ListedItems>
      ))}
    </WrapperAllNotes>
  );
};

export default ListItem;
