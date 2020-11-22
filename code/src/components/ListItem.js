import React from 'react';
import { useDispatch } from 'react-redux';

import { todolist } from 'reducers/todolist';

export const ListItem = (item) => {
  // console.log(item.listItem.category);
  // console.log(item.listItem.complete);

  const dispatch = useDispatch();

  const handleOnChange = () => {
    dispatch(todolist.actions.changeComplete({
      itemId: item.listItem.id,
      complete: !item.listItem.complete
    }));
  };

  return (
    <>
      <input 
        type="checkbox"
        onChange={handleOnChange}
        checked={item.listItem.complete ? "checked" : ""}
      ></input>
      <span style={{textDecoration: item.listItem.complete ? "line-through" : ""}}>
        {item.listItem.text} / {item.listItem.category}
      </span>
    </>
  );
};
