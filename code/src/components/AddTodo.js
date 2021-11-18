import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todos from "../reducers/todos";

// This function is responsible for sending the input's value to the addTodo reducer.

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch(); // sends the info to the reducers

  //function btn
  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input)); //input replace the action parameter
    setInput("") 
  };



  return (
    <div className="input-wrapper">
      <input
        className="todo-input"
        type="text"
        value={input}
        placeholder="write here..."
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={onAddTodo} className="todo-btn">
        {" "}
        <i class="fas fa-plus-square"></i>
      </button>
    </div>
  );
};

export default AddTodo;
