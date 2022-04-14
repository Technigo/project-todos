import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";


const WrapperAllNotes = styled.section`
display: flex;
flex-direction: column;
margin-bottom: 10px;
justify-content: center;
align-items: center;
`

const ListedItems = styled.article`
position: relative;
border: none;
border-bottom: 1px solid #AD6122;
/* border-top: 2px solid blue; */
width: 70vw;
padding: 10px;
margin-bottom: 5px;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;

`
const NoteTitle = styled.h2`
font-weight: 400;
margin: 0 0 10px 0;
text-transform: capitalize; 
color: #AD6122;

`

const Description = styled.p`
font-size: 18px;
margin: 0 0 10px 0;
`

const DeleteButton = styled.button`
position: absolute;
top: 10px;

right: 10px;
background: none;
border: 1px solid white;
border-radius: 2px;
cursor: pointer;

&:hover {
  background-color: yellow;
  border: 1px solid black;
  border-radius: 2px;
}
`


const ListItem = () => {
  const listItems = useSelector((backpack) => backpack.todos.items)
  
  const dispatch = useDispatch()

  const onToDoToggle = (noteId) => {
    dispatch(todos.actions.toggleItem(noteId))
  }

  const onNoteDelete = (index) => {
    dispatch(todos.actions.deleteItem(index))
  }

return(
  <WrapperAllNotes>
    {listItems.map((newNote, noteIndex) => (
    <ListedItems key={newNote.id}>
      <Wrapper>
      <NoteTitle>{newNote.name}</NoteTitle>
       <Description>{newNote.description}</Description>
      <label>
       Done deal:
      <input type="checkbox" 
      checked={newNote.isCaught} 
      onChange={() => onToDoToggle(newNote.id)} />
      </label>
      </Wrapper>
      <DeleteButton onClick={() => onNoteDelete(noteIndex)}>
        {/* <span role="img" aria-label="delete">❌</span> */}
        Delete
      </DeleteButton>
    </ListedItems>


))}
  </WrapperAllNotes>
)
}


export default ListItem
