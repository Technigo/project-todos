import styled from 'styled-components';

export const SingleTodo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: lightpink;
  margin: 10px;
  border-bottom: 1px solid black;
  padding: 1rem 2rem;
`;

export const ToDoText = styled.div`
cursor: pointer;
text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
font-size: 24px;
`;

export const DateAndDelete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const DateText = styled.div`
  font-style: italic;
  font-size: 14px;
  margin: 7px;
  opacity: 50%;
`;

export const DeleteButton = styled.button`
  background: #e47588;
  border: solid 1px black;
  font-family: 'DynaPuff', cursive;
  font-size: 18px;
  cursor: pointer;
  border-radius: 50%;
  padding: 0px 9px;
  max-width: 2.5rem;
`;