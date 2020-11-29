import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { todos } from "../reducer/todos";

export const RemoveTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onItemAdd = () => {
    dispatch(todos.actions.RemoveItem(value));
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={onItemAdd}>Remove todo</button>
    </div>
  );
};
