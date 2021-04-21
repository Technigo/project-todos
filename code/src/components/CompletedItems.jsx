import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { todos } from '../reducers/todos';
import moment from 'moment';
import { FaTrashAlt } from "react-icons/fa";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Todo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;  
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
  background-color: white;
  border: none;
`;

export const CompletedItems = () => {
  const items = useSelector((store) => store.todos.items.filter(item => item.isComplete));
  const dispatch = useDispatch();
  return (
    <Container>
      <h2>Completed Tasks</h2>
      {items.map(todo => 
      <Todo key={todo.id}>
        <div> 
          <p>{todo.description}</p>
          <TimeStamp>{moment(items.createdAt).fromNow()}</TimeStamp>
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
