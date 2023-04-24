import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 2%;
  padding: 1rem;
`

export const TopDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap:1rem;

  @media (max-width:668px) {
    display: block;
  }
`

export const StyledForm = styled.form`
  margin: 2rem 0;
  border: 1px solid var(--primaryBlack);
  padding: 3rem 1.5rem 1rem 1.5rem;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`

export const NewToDoP = styled.span`
  padding: 0 1rem;
`

export const ToDoListBox = styled.div`
  display: flex;
  text-align:left;
  width:100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`
export const StyledInput = styled.input`
 border: none;
 border-radius: 5px;
 width: 94%;
 margin: 1rem 0;
 padding: .5rem .8rem;

 &:hover {
  box-shadow:0 0 4px rgba(0,0,0,0.5);
}
`

export const LeftToDo = styled.div`
  display: flex-inline;
  text-align:left;
  max-width: 300px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  text-align:center;
`

export const BottomToDo = styled.div`
text-align: center;
display:flex-inline;
flex-direction:row
align-items:centre;
text-align:centre;
`

export const HCounter = styled.h4`
font-family: 'Manrope', sans-serif;
font-size: 15px;
font-weight: 300;
`

export const PTime = styled.p`
font-family: 'Manrope', sans-serif;
font-size: 12px;
font-weight: 300;
`
