import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { todolist } from "reducers/todolist";
import { taskContainer } from "components/taskContainer.css"

export const Task = ({ itemIndex }) => {

    const item = useSelector((store) => store.todolist.list.items[itemIndex]);
    const dispatch = useDispatch()
    
    const onRemoveClicked = event => {
        dispatch(
            todolist.actions.remove({
                itemIndex: itemIndex
            })
        )
    }

    const handleOnChange = event => {
        dispatch(
            todolist.actions.setDone({
                itemIndex: itemIndex,
                done: !item.done
            })
        )
    }
  
 return <div className="task-container" className={`task ${item.done ? "done" : ""}`}>
     <input type="checkbox"
        onChange={handleOnChange}
        className="todo-item-check"
        checked={item.done ? "checked" : "" }></input>
    <span className="text">{item.description}</span>
    <a className="remove" onClick={onRemoveClicked}>[Remove]</a>
 </div>
  };