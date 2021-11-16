import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import moment from "moment";

import todo from "../reducers/todo";

// styled component that wraps the content
const TodoContainer = styled.div`
  display: flex;
  gap: 20px;
  background-color: cadetblue;
  border: 2px solid black;
  padding: 20px;
`;

const TodoList = () => {
  let store = useSelector((store) => store.todo.items);

  const dispatch = useDispatch();

  //   Function runs when checkbox is clicked
  const onCheckChange = (id) => {
    dispatch(todo.actions.changeStatus(id));
  };

  //   Function runs when user clicks to remove the single todo
  const onRemoveClick = (id) => {
    dispatch(todo.actions.removeSingleTodo(id));
  };

  if (store.length === 0) {
    return (
      <div className="empty-state">
        <p>There are no Todos at the moment.!</p>
      </div>
    );
  }

  return (
    <div>
      {store.map((item) => (
        <TodoContainer key={item.id}>
          {/* We check if the task is marked as completed and change className */}
          {item.completed ? (
            <p className="completed">{item.text} </p>
          ) : (
            <p>{item.text}</p>
          )}

          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onCheckChange(item.id)}
          ></input>
          <p>{moment(item.createdAt).fromNow()}</p>
          {item.dueAt < new Date() ? (
            <p className="overdue">
              {" "}
              Task is overdue {moment(item.dueAt).fromNow()}{" "}
            </p>
          ) : (
            <p> Task is due: {moment(item.dueAt).fromNow()}</p>
          )}

          <button onClick={() => onRemoveClick(item.id)}>Remove</button>
        </TodoContainer>
      ))}
    </div>
  );
};

export default TodoList;
