import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from '../reducers/todos';
import Checkbox from './Checkbox';
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


//styled components
const TodoSection = styled.section`
word-wrap: break-word;
font-family: 'Gaegu', cursive;`;

const TodoItem = styled.div`
word-wrap: break-word;
font-family: 'Architects Daughter', cursive;
`;


//using props in text decoration to make the line thorugh depending on toggle on/off on task 
const TodoParagraph = styled.p`
color: ${props => props.isComplete ? "grey" : "black"};
text-decoration: ${props => props.isComplete ? "line-through" : "none"};
display:inline-block;
width: 45%;
font-size: 18px;
line-height: 8px;
`;

const DeleteToDo = styled.button`
display:inline-block;
background-color: #000046;
border:none;
border-radius: 8px 0 8px 0;
padding:0;
height: 40px;
width: 86px;
font-weight: 600;
font-size:18px;
color: white;
box-shadow: 3px 3px #1CB5E0;
font-family: 'Gaegu', cursive;
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
            todoId={item.id}
            isChecked={item.isComplete}

          />
          <TodoParagraph isComplete={item.isComplete}>{item.text}
          </TodoParagraph>

          <DeleteToDo onClick={() => onDeleteTodoImmutability(item.id)}>
            Delete&nbsp;<FontAwesomeIcon icon={faTimesCircle} />
          </DeleteToDo>
        </TodoItem>
      ))}
    </TodoSection>
  );
};

export default TodoList;
