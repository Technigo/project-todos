import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { onAdd } from "../features/todo/todoSlice";
import uniqid from "uniqid";

const NewForm = () => {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uniqid(),
      todo: todoInput,
      isCompleted: false,
    };
    dispatch(onAdd(newTodo));
    setTodoInput("");
  };

  return (
    <form className="container-center-start todo-item" onSubmit={onSubmit}>
      <button className="btn-todo container-center" type="submit">
        <FaPlus />
      </button>
      <input
        type="text"
        placeholder="Add task"
        onChange={(event) => setTodoInput(event.target.value)}
        value={todoInput}
      />
    </form>
  );
};

export default NewForm;
