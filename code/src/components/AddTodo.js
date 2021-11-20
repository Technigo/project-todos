import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

import todos from "../reducers/todos";

const ButtonInput = styled.button`
  margin-right: 10px;
  margin-top: 10px;
  height: 30px;
  width: 30px;
  background-color: #ff0266;
  color: #ffffff;
  text-transform: uppercase;
  border-style: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
`;

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  // const date = useSelector((store) => store.todo.today);

  return (
    <div className="container-input">
      {/* <div> {moment(date).format('dddd')}, {moment(date).format('ll')}<div> */}
      <input
        className="input-field"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <ButtonInput onClick={() => onAddTodo(input)}>
        <FaPlus />
      </ButtonInput>
    </div>
  );
};

export default AddTodo;
