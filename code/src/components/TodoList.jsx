import React from 'react';
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

// const FaTrashAlt = styled.p`
//   color: red;
// `;



// const FaPlus = styled.p`
//   color: red;
// `;

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  // const wholeStore = useSelector((store) => store)
  
  return (
    <TodoContainer>
      {items.map(todo => 
     <Todo key={todo.id}>
       <p>{todo.description}</p>
        <InputContainer>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
          <DeleteBtn
            onClick={() => dispatch(todos.actions.deleteItem(items))}
            aria-label="Delete item"
          >
            <FaTrashAlt />
          </DeleteBtn>
        </InputContainer>
     </Todo> 
     )}
    </TodoContainer>
  )
}