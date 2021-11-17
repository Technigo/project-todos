import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((store) => store.todos.items.length);

  const completed = useSelector((store) =>
    store.todos.items.filter((item) => item.isComplete === true)
  );

  return (
    <>
      <div>
        <p>You have {counter} tasks on your todo list</p>
      </div>

      <div>
        <p>You have completed {completed.length} </p>
      </div>
    </>
  );
};

export default Counter;
