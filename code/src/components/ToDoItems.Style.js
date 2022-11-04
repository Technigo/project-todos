import styled from 'styled-components';

export const ToDoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  word-wrap: break-word;
  width: 100%;
  min-height: 5.5rem;
  
  
  background-color: #d8dbe7;
  position: relative;
  padding: 0.3rem;
  box-shadow: 0.2rem 0.2rem 0.2rem;
  
  margin-top: 0.5rem;
  `
export const Pin = styled.img`
  width: 1.5rem;
  position: absolute;
  left: 48%;
  top: -0.7rem;
  rotate: -15deg;
  z-index: 1;
`

export const TaskInteraction = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
`

export const TimeStamp = styled.p`
  font-size: 14px;
  margin: 0.4rem auto 0;
  
`

export const DeleteButton = styled.button`
  width: 2rem;
  background-color: transparent;
  border: none;
  position: relative;
  left: 33%;
`

export const ContentWrapper = styled.div`
  display: flex;
  word-wrap: break-word;
  position: relative;

  label {
    display: block;
    height: 1.5em;
    width: 1.5em;
    cursor: pointer;
  }
  
  input[type="checkbox"]{
    height: 1.5rem;
    width: 1.5rem;
    position: absolute;
    transform: scale(0);

    &:checked ~ .checkmark {
    transform: rotate(45deg);
    height: 1.3em;
    width: 0.5em;
    border-color: #000;
    border-top-color: transparent;
    border-left-color: transparent;
    border-radius: 0;
    left: 0.6rem;
    top: -0.2rem;
    position: relative;
    margin-right:1rem;
    }
  }

  p {
    font-family: 'Caveat', cursive;
    text-transform: capitalize;
    margin-left: 0.3rem;
    
  }
`
export const Checkmark = styled.div`
  display: block;
  width: inherit;
  height: inherit;
  border: 0.2rem solid #000;
  border-radius: 0.5rem;
  transition: all .3s;
  `