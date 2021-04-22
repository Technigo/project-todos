import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { todos } from '../reducers/todos';
import moment from 'moment';
import { FaTrashAlt } from "react-icons/fa";

const Container = styled.div`
  padding-top: 40px;
  width: 80%;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding-top: 40px;
`;

const CompletedHeader = styled.h1`
  margin: 0 auto;
  font-size: 20px;
  color: white;
`;

const Todo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  color: white;
`;

const TimeStamp = styled.p`
  color: gray;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DeleteBtn = styled.button`
  background-color: black;
  color: #D81159;
  border: none;
`;

export const CompletedItems = () => {
  const items = useSelector((store) => store.todos.items.filter(item => item.isComplete));
  const dispatch = useDispatch();
  return (
    <Container>
      <HeaderContainer>
        <CompletedHeader>Completed Tasks</CompletedHeader>
      </HeaderContainer>
      {items.map(todo => 
      <Todo key={todo.id}>
        <div> 
          <p>{todo.description}</p>
          <TimeStamp>{moment().format('MMMM Do YYYY')}</TimeStamp>
        </div>
        <InputContainer>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
          <DeleteBtn
            onClick={() => dispatch(todos.actions.deleteItem(todo.id))}
            aria-label="Delete item"
          >
            <FaTrashAlt />
          </DeleteBtn>
        </InputContainer>
      </Todo> 
     )}
    </Container>
  )
}
