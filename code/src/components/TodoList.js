import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from '../reducers/todos';
import Checkbox from './Checkbox';
import styled from "styled-components";

//styled components
const TodoSection = styled.section`
word-wrap: break-word;
font-family: 'Comic Neue', cursive;
`;

const TodoItem = styled.div`
word-wrap: break-word;
font-family: 'Comic Neue', cursive;
`;

const TodoParagraph = styled.p`
color: ${props => props.isComplete ? "grey" : "black"};
text-decoration: ${props => props.isComplete ? "line-through" : "none"};
display:inline-block;
width: 65%;
font-size: 18px;
line-height: 8px;
`;

// const Checkbox = styled.div`
// display:inline-block;
// margin: 0 10px 0 25px;
// background-color: ${props => props.checked ? "#ee9ca7;" : "#ffdde1;"};
// background-image: ${props => !props.checked ? "none;" : "#ffdde1;"}; 
// cursor: pointer;
// border-radius: 50%;
// font-size: 22px;
// height: 28px;
// width: 28px; 
// `;

const DeleteToDo = styled.button`
display:inline-block;
`;

//code
//taking items from the store
const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  

  const onDeleteTodoImmutability = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <TodoSection>
      {items.map((item, index) => (
        <TodoItem key={item.id}>
          <Checkbox
            type="checkbox"
            todoId= {item.id}
            isChecked={item.isComplete}
            
          />
          <TodoParagraph isComplete={item.isComplete}>{item.text}
          </TodoParagraph>

          <DeleteToDo onClick={() => onDeleteTodoImmutability(item.id)}>
            Delete
          </DeleteToDo>
        </TodoItem>
      ))}
    </TodoSection>
  );
};

export default TodoList;
