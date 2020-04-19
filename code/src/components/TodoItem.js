import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "reducers/todos";

export const TodoItem = ({itemIndex}) => {
  const item = useSelector((store) => store.todos.list.items[itemIndex]);
  const dispatch = useDispatch();

  const onRemoveClicked = (event) => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex,
      })
    );
  };

  const handleOnChange = (event) => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done,
      })
    );
  };

  return (
    <div className={`todo-item ${item.done ? "done" : ""}`}>
      <div className="todo-item-div">
        <input type="checkbox"
          onChange={handleOnChange} 
          className="todo-item-check"
          checked={item.done ? true : ""}>
        </input>
    
        <span className="todo-item-description"> 
          {item.description} 
        </span>
      </div>
      
      <button className="todo-item-remove" 
        onClick={onRemoveClicked}> CLEAR 
      </button>
    </div>  
  );
};