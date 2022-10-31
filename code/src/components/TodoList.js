import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/store';
import styled from 'styled-components'

const Complete = styled.input`
  -webkit-appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #e4fd81;
  margin-right: 20px;
  background: ${(props) => (props.checked ? '#e4fd81' : 'white')};
`;

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const doneTodos = useSelector((store) => store.todos.items.completed);
  const delted = useSelector((store) => store.todos.deleteTodo);
  console.log(delted)
  console.log(doneTodos)
  const dispatch = useDispatch();

  const onToggleTodoList = (todoId) => {
    dispatch(todos.actions.toggleTodo(todoId));
  }

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  }

  return (
    <>
      <h2>{items.length}</h2>
      {items.map((item) => (
        <div
          key={item.id}>
          <p>Todo: {item.name}</p>
          <p>Posted: {item.postedTime}</p>
          <p>Due date: {item.date}</p>
          <Complete
            type="checkbox"
            checked={item.completed}
            onChange={() => onToggleTodoList(item.id)} />
          <button
            type="button"
            onClick={() => onDeleteTodo(item.id)}> deleted
          </button>
        </div>
      ))}
    </>
  )
}

export default TodoList