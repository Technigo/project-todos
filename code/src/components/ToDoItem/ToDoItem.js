import React from 'react';
import moment from 'moment';
import {
  SingleTodo,
  DateAndDelete,
  DeleteButton,
  ToDoText,
  DateText
} from 'components/ToDoItem/ToDoItem.style';

export const ToDoItem = ({ todo, index, onDelete, onDone }) => {
  return (
    <SingleTodo>
      <ToDoText onClick={() => onDone(todo.id)} key={todo.id} isDone={todo.isDone}>
        <p>{todo.text}</p>
      </ToDoText>
      <DateAndDelete>
        <DeleteButton onClick={() => onDelete(index)} type="button" title="Delete task">
        X
        </DeleteButton>
        <DateText>Added {moment(todo.createdAt).format('HH:mm on MMM D, YYYY')}</DateText>
      </DateAndDelete>
    </SingleTodo>
  );
};