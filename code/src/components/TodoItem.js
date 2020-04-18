import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from '../reducers/todos'

export const TodoItem = ({ itemIndex }) => {

  const dispatch = useDispatch();

  const item = useSelector(store => store.todos.list.items[itemIndex]);

  const handleOnchange = event => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done
      })
    );
  };

  const onRemoveClicked = event => { };



  return (
    <div className={`todo-item ${item.done ? "done" : ""} `}>
      <input type="checkbox"
        onChange={handleOnchange}
        checked={item.done ? "checked" : ""}
      ></input>
      <p>{item.description}</p>

      <button onClick={onRemoveClicked}>Remove</button>
    </div>
  )
};