import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as EmptyPage } from "../images/empty-page.svg";

import moment from "moment";

import todo from "../reducers/todo";

// styled component that wraps the content

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
        <EmptyPage className="empty-page" />
      </div>
    );
  }

  return (
    <div className="to-do-container">
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
              Task is overdue {moment(item.dueAt).fromNow()}{" "}
            </span>
          ) : (
            <span className="task-info">
              Task is due: {moment(item.dueAt).fromNow()}
            </span>
          )}
          {item.category && (
            <span className={item.category}>{item.category}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
