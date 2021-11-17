import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoInput } from "./styled/TodoInput";
import { InputBtn } from "./styled/InputBtn";
import plus from "assets/plus.svg";
import todos from "../reducers/todos";

export const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const switchToAll = () => {
    dispatch(todos.actions.changeFilter("all"));
  };

  const onAddTodo = (e) => {
    dispatch(todos.actions.addTodo(input));
    setInput("");
    e.preventDefault();
  };

  return (
    <form onSubmit={onAddTodo}>
      <div className="todo-input">
        <TodoInput height={30} width={218} value={input} onChange={(event) => setInput(event.target.value)} />
        <InputBtn onClick={switchToAll} type="submit">
          <img className="plus" src={plus} alt="plus" area-label="plus"></img>
        </InputBtn>
      </div>
    </form>
  );
};
