import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/store';
import { Container, Todo, Heading, TodoText, TimeStampContainer, Posted, DueDate, BtnContainer, Complete, DeleteBtn } from './TodoList.style';

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  const onToggleTodoList = (todoId) => {
    dispatch(todos.actions.toggleTodo(todoId));
  }

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  }

  const colors = ['#fdfdc4', '#ffe8cf', '#EDC0F6', 'lightblue', '#CFF3A6', '#C0EAF6 ', '#F8C978 ',
    '#CABEF5'];

  return (
    <Container>
      {items.map((item, i) => (
        <Todo
          key={item.id}
          style={{ backgroundColor: colors[i] }}>
          <Heading>Todo</Heading>
          <TodoText>{item.name}</TodoText>
          <TimeStampContainer>
            <Posted>Posted: {item.postedTime}</Posted>
            <DueDate>Due date: {item.date}</DueDate>
          </TimeStampContainer>
          <BtnContainer>
            <Complete
              type="checkbox"
              checked={item.completed}
              onChange={() => onToggleTodoList(item.id)} />
            <DeleteBtn
              type="button"
              onClick={() => onDeleteTodo(item.id)}> ❌
            </DeleteBtn>
          </BtnContainer>
        </Todo>
      ))}
    </Container>
  )
}

export default TodoList