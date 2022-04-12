import React, { useState } from "react";
import "./input.css";

const Input = () => {
  //To keep track of whats happening in the input box we need to use useState
  const { input, setInput } = useState("");

  //to define the input we need a function
  const addTodo = () => {};

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Input;
