import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'; 
import dayjs from 'dayjs';
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

import todos from '../reducers/todos';

import EditButton from './EditButton';
import ExitButton from './ExitButton';
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3vh;
  border-bottom: solid 1px #e5e5e5;

  @media (min-width: 768px) {
    padding: 4vh;
  }
  
  @media (min-width: 1200px) {
    padding: 5vh;
  }
`;

const IconDiv = styled.div`
  display: flex;
  flex: 1;
  background: #ea9a96;
  align-self: stretch;
`;

const ContentParagraph = styled.p`
  margin: 0 0 0 15px;
  font-size: 16px;
  color: ${props => props.todoComplete ? '#a0a9cf' : '#303960'}; 
  text-decoration: ${props => props.strikethrough ? 'line-through' : '' };

  @media (min-width: 768px) {
    font-size: 20px;
  }
  
  @media (min-width: 1200px) {
    font-size: 28px;
  }
`;

const DateParagraph = styled.p`
  margin: 0 0 0 auto;
  font-size: 12px;
  color: ${props => props.todoComplete ? '#a0a9cf' : '#303960'};

  @media (min-width: 768px) {
    font-size: 14px;
  }
  
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

const EditTodo = styled.input`
  width: 50%;
  font-size: 16px;
  border: none;
  margin-left: 10px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
  
  @media (min-width: 1200px) {
    font-size: 28px;
  }
`;

const Todo = ({ todo }) => {
  const [editContent, setEditContent] = useState(todo.content);
  const dispatch = useDispatch();

  const todoDueDate = dayjs(todo.dueDate).format('MMM D');

  const onInputChange = (e) => {
    setEditContent(e.target.value);
  };

  const onSaveEditedContent = () => {
    dispatch(todos.actions.editTodoContent({
      ...todo,
      content: editContent,
    }));
    console.log(editContent)
  }

  return (
    <TodoContainer>
      <Checkbox
        checked={todo.isComplete}
        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
        icon={
          <IconDiv>
            <Icon.FiCheck 
              color="white" 
              size={20} 
            />
          </IconDiv>
        }
        borderColor="#ea9a96"
        borderRadius={20}
        style={{ overflow: "hidden" }}
        size={20}
      />

      {todo.isEdit ? (
        <EditTodo 
          type="text" 
          value={editContent} 
          onChange={onInputChange} 
        /> 
      ) : ( 
        <ContentParagraph 
          todoComplete={todo.isComplete}
          strikethrough={todo.isComplete}
        >
          {todo.content}
        </ContentParagraph>
      )}

      {/* <DateParagraph todoComplete={todo.isComplete}>{dayjs(todo.timeStamp).format('MMM D')}</DateParagraph> */}
      <DateParagraph todoComplete={todo.isComplete}>Due: {todoDueDate}</DateParagraph>
      {todo.isEdit ? <ExitButton todo={todo} /> : <EditButton todo={todo} />}
      {todo.isEdit ? <SaveButton onSaveEditedContent={onSaveEditedContent} /> : <DeleteButton todo={todo} />}
    </TodoContainer>
  );
};

export default Todo;