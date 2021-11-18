import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import moment from "moment";

import todo from "../reducers/todo";

// styled component that wraps the content
const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
    <TodoContainer>
      {store.map((item) => (
        <div key={item.id} className="todo-item">
          {/* We check if the task is marked as completed and change className */}
          <div className="on-same-line">
            <input
              type="checkbox"
              className="checkbox"
              checked={item.completed}
              onChange={() => onCheckChange(item.id)}
            ></input>
            {item.completed ? (
              <p className="todo-display completed">{item.text} </p>
            ) : (
              <p className="todo-display">{item.text}</p>
            )}
            <button
              className="btn-remove"
              onClick={() => onRemoveClick(item.id)}
            >
              Remove
            </button>
          </div>
          <span className="task-info">{moment(item.createdAt).fromNow()}</span>
          {item.dueAt < new Date() ? (
            <span className="task-info overdue">
              {" "}
              Task is overdue {moment(item.dueAt).fromNow()}{" "}
            </span>
          ) : (
            <span className="task-info">
              {" "}
              Task is due: {moment(item.dueAt).fromNow()}
            </span>
          )}
          {item.category && (
            <span className={item.category}>{item.category}</span>
          )}
        </div>
      ))}
    </TodoContainer>
  );
};

export default TodoList;
