import React, { useState } from "react";
import moment from "moment";
import { AiOutlinePlus } from "react-icons/ai";
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
      date: moment(new Date()).format("MMM Do, h:mm:ss a"),
    };
    dispatch(onAdd(newTodo));
    setTodoInput("");
  };

  return (
    <form className="container-center-start todo-item" onSubmit={onSubmit}>
      <button className="btn-todo container-center" type="submit">
        <AiOutlinePlus className="btn-icon" />
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
