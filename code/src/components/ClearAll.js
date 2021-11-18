import React from 'react';
import todos from "../reducers/todos";
import { useDispatch } from "react-redux";

const ClearAll = () => {
  //Get correct item from store based on index
  const dispatch = useDispatch();

  // calling clearAllTodos with dispatch 
  const clearAll = () => {
    dispatch(todos.actions.clearAll());
    localStorage.clear();
  };

return (
 
    <button onClick={clearAll}>
      Clear all tasks
    </button>
 
)
};

export default ClearAll; 