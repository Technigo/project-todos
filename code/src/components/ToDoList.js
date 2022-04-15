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
  

  @media (min-width: 768px) {
    
  }
`;

const ListedItems = styled.article`
  position: relative;
  border: none;
  border-bottom: 1px solid #ad6122;
  width: 70vw;
  padding: 10px;
  margin-bottom: 20px;
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
  overflow-wrap: break-word;

  @media (min-width: 992px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin: 0 0 25px 0;
  white-space: pre-wrap;
  font-weight: 400;
  overflow-wrap: break-word;
  
  @media (min-width: 992px) {
    font-size: 22px;
    font-weight: 300;
  }

`;

const DateWrapper = styled.div`
width: 100%;
position: absolute;
bottom: 0;
`


const Date = styled.p`
  font-size: 12px;
  font-style: italic;
  color: #606060;

  @media (min-width: 992px) {
    font-size: 14px;
  }
  
`
const CheckWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
width: 70vw;
padding: 5px 0;

`
const CheckLabel = styled.label`
  font-size: 12px;
  position: absolute;
  right: 35px;
  bottom: 12px;
  color: #606060;

  @media (min-width: 992px) {
    font-size: 14px;
  }
`;

const StyledCheckBox = styled.input`
appearance: none;
cursor: pointer;
position: absolute;
bottom: 12px;
display: inline-block;
background-color: yellow;
width: 15px;
height: 15px;
place-content: center;
display: grid;



&::before {
  content:"";
  background-color: yellow;
  width: 10px;
  height: 10px;
}

&:checked::before {
  width: 10px;
  height: 10px;
  background-color: blue;

}
`

const DeleteButton = styled.button`
  position: absolute;
  font-family: 'Jost', sans-serif;
  color: #606060;
  top: 20px;
  color: blue;
  font-size: 12px;
  right: 12px;
  background: none;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: yellow;
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
            <DateWrapper>
            <Date>{date}</Date>
            </DateWrapper>
           <CheckWrapper>
                <StyledCheckBox
                  type="checkbox"
                  checked={newNote.isDone}
                  onChange={() => onToDoToggle(newNote.id)}
                />
              <CheckLabel>
                Done deal:
              </CheckLabel>
              </CheckWrapper>
            
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
