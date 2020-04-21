import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { todos } from "../reducers/todos.js";

export const TodoItem = ({ itemIndex }) => {
  // Get the item from the store based on the index
const item = useSelector(store => store.todos.list.items[itemIndex])
 
const dispatch = useDispatch()

const onClearClicked = event => {
 dispatch(
    todos.actions.removeTodo({
    itemIndex: itemIndex
   })
  ) 
}

const handleOnChange = event => {
    dispatch(
    todos.actions.setDone({
    itemIndex: itemIndex,
    done: !item.done
    })
  )
}

return ( 
 <div className={`todo-item ${item.done ? "done" : ""}`}>
    <input 
    type="checkbox"
    onChange={handleOnChange}
    className="todo-item-check"
    checked={item.done ? "checked" : ""}
    ></input>
    <span className="todo-item-description">{item.description}</span>
    <a className="todo-item-remove" onClick={onClearClicked}>
      clear
    </a>
 </div>
)
};