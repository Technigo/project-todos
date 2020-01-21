import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoList } from "reducers/todoList";
import { Form, ToggleAddTodo, AddTodoButton } from "components/styles";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(todoList.actions.addTodo(todo));
    setShowInput(false);
    setTodo("");
  };

  return (
    <>
      {!showInput ? (
        <ToggleAddTodo onClick={() => setShowInput(true)}>
          + Add task
        </ToggleAddTodo>
      ) : (
        <Form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={todo}
            onChange={event => setTodo(event.target.value)}
          ></textarea>
          <AddTodoButton
            disabled={todo.length === 0}
            type="submit"
            value="Add task"
          ></AddTodoButton>
        </Form>
      )}
    </>
  );
};
