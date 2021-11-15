import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "reducers/todoData";

const AddTodo = ({ todo }) => {
  const [addTitel, setAddTitel] = useState();
  const [addTask, setAddTask] = useState();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        titel: addTitel,
        task: addTask
      })
    );
  };

  return (
    <article className="addTodoContainer" onSubmit={onSubmit}>
      <section className="addTodo___text">
        <label> Add titel: </label>
        <input
          className="titel"
          type="text"
          value={addTitel}
          onChange={(e) => setAddTitel(e.target.addTitel)}
        />

        <label>
          {" "}
          Add a task
          <input
            className="task"
            type="text"
            value={addTask}
            onChange={(e) => setAddTask(e.target.addTask)}
          />
        </label>
      </section>
      <div className="addTodo___btn">
        <button type="submit" onSubmit={onSubmit}>
          {" "}
          Add{" "}
        </button>
      </div>
    </article>
  );
};

export default AddTodo;
