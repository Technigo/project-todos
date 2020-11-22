import React from 'react';
import { useDispatch } from 'react-redux';

import { todolist } from 'reducers/todolist';

export const ListItem = ({ listItem }) => {
  // console.log(item.listItem.category);
  // console.log(item.listItem.complete);
  // console.log(listItem);

  const dispatch = useDispatch();

  const handleOnChange = () => {
    dispatch(todolist.actions.changeComplete({
      itemId: listItem.id,
      complete: !listItem.complete
    }));
  };

  const removeTask = () => {
    dispatch(todolist.actions.removeToDo({
      itemId: listItem.id
    }));
  };

  return (
    <div className="list-item" style={{display: "flex"}}>
      <input 
        type="checkbox"
        onChange={handleOnChange}
        checked={listItem.complete ? "checked" : ""}
      ></input>
      <p style={{textDecoration: listItem.complete ? "line-through" : ""}}>
        {listItem.text} / {listItem.category}
      </p>
      <button type="button" onClick={removeTask}>Remove Task</button>
    </div>
  );
};

// Remove display flex from list-item and fix that with CSS later
