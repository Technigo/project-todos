import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 5%;
  padding: 2rem;
`

export const TopDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap:1rem;

  @media (max-width:668px) {
    display: block
  }
`

export const StyledForm = styled.form`
  margin-top: 2rem;
  border: 1px solid var(--primaryBlack);
  padding: 3rem 1.5rem 1rem 1.5rem;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`

export const NewToDoP = styled.span`
  padding: 0 1rem;
`

export const ToDoListBox = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center,
`
