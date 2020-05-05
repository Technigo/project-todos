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
  
 return <section>
    <div className="card">
        <div className="checkbox-container">
            <label className="checkbox-label">
                <input type="checkbox"
                    onChange={handleOnChange}
                    checked={item.done ? "checked" : "" }></input>
                <span class="checkbox-custom rectangular"></span>
            </label>
        </div>
        <span className="text">{item.description}</span>
        <button className="remove" onClick={onRemoveClicked}>X</button>
    </div>
 </section>
  }

