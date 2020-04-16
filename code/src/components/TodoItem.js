import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todos } from "../reducers/todos.js";

export const TodoItem = ({ itemIndex }) => {
  // Get the item from the store based on the index
  const item = useSelector((store) => store.todos.list.items[itemIndex]);

  const dispatch = useDispatch();

  const onRemoveClicked = (e) => {
    // Dispatch the remove todo event for this item
    dispatch(
      todos.actions.removeTodo({
        itemIndex,
      })
    );
  };

  const handleOnChange = (e) => {
    // Change the value of done for this item
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done,
      })
    );
  };

  return (
    <div className={`todo-item ${item.done ? "done" : ""}`}>
      <input
        type="checkbox"
        onChange={handleOnChange}
        className="todo-item-check"
        checked={item.done ? "checked" : ""}
      ></input>
      <span className="todo-item-description">{item.description}</span>
      <a className="todo-item-remove" onClick={onRemoveClicked}>
        <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C10.336 24 8.787 23.177 7.854 21.796C7.7 21.567 7.76 21.256 7.989 21.103C8.217 20.947 8.529 21.008 8.683 21.236C9.429 22.341 10.669 23 12 23C13.178 23 14.227 22.479 14.959 21.667L14.146 20.854C14.044 20.751 13.991 20.609 14.001 20.465C14.012 20.319 14.084 20.187 14.2 20.101L16.2 18.601C16.214 18.59 16.218 18.597 16.229 18.59C16.309 18.538 16.398 18.5 16.5 18.5C16.776 18.5 17 18.724 17 19C17 21.757 14.757 24 12 24M7.501 19.5H7.5V19.5C7.224 19.5 7 19.276 7 19C7 16.243 9.243 14 12 14C13.664 14 15.213 14.823 16.146 16.204C16.3 16.433 16.24 16.744 16.011 16.897C15.783 17.054 15.471 16.993 15.317 16.764C14.571 15.659 13.331 15 12 15C10.698 15 9.551 15.635 8.82 16.601L9.724 17.053C9.878 17.131 9.982 17.282 9.998 17.455C10.014 17.628 9.938 17.796 9.8 17.899L7.8 19.399C7.791 19.406 7.779 19.403 7.771 19.41C7.692 19.462 7.603 19.499 7.501 19.5M12 7C5.306 7 2.102 5.098 2 4.507C2.102 3.902 5.306 2 12 2C18.694 2 21.898 3.902 22 4.493C21.898 5.098 18.694 7 12 7M12 0C6.183 0 0 1.577 0 4.5C0 4.643 2.5 27 2.5 27C2.5 28.97 7.279 30 12 30C16.721 30 21.5 28.97 21.497 27.056C21.497 27.056 24 4.643 24 4.5C24 1.577 17.817 0 12 0" fill="#303C42" />
        </svg>
      </a>
    </div>
  );
};