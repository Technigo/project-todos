import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import styled from 'styled-components';
import { FaTrashAlt } from "react-icons/fa";

const TodoContainer = styled.div`
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

const TimeStamp = styled.p`
  color: gray;
`;

const BtnTry = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 30px;
`;

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();
  
  return (
    <TodoContainer>
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
      <BtnTry
        type="button"  
        onClick={() => dispatch(todos.actions.markAllComplete())}
        aria-label="Mark all items as completed"
        >
        Mark all complete
      </BtnTry>
    </TodoContainer>
  )
}