import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { tasks } from 'reducers/tasks'


export const Footer = () => {

  const items = useSelector((store) => store.tasks.items);
  const enabled = items.length > 0;

  const dispatch = useDispatch();

  const handleRemoveButton = () => {
    dispatch(tasks.actions.removeAll())
  }

  return (
    <ButtonWrapper>
    <Button onClick={handleRemoveButton} disabled={!enabled}>
      {/* <Emoji role="img" aria-label="Bin">🗑</Emoji>  */}
      Delete all!
    </Button>
    </ButtonWrapper>
  );
};
//   const dispatch = useDispatch()
//   const items = useSelector((store) => store.tasks.items)

//   const handleDeleteAll = () => {
//     dispatch(tasks.actions.removeAll());
//   }

//   return (
//     <FooterWrapper>
//       <DeleteAllButton
//         onclick = {handleDeleteAll} >
//         Delete All
//     </DeleteAllButton>
//     </FooterWrapper>
//   )
// }
const ButtonWrapper = styled.section`
 /* background: #f1f1f1; */
  position: absolute;
    align-items: center;
    bottom: 0;
    /* width: 600px;
    height: 2.5rem; */
 `
const Button = styled.button`
width: 100px;
height: 30px;
background: #fdc1c5;
margin-left: 10px;
`
