import React from "react";
import { useSelector } from "react-redux";
import Date from "./Date";

const Header = () => {
  const items = useSelector((store) => store.todos.items);
  console.log(items.length);

  const done = items.filter((item) => item.isComplete);
  console.log(done);

  const left = items.filter((item) => item.isComplete === false);
  console.log(left);

  return (
    <>
      <h1>My planes!</h1>
      <Date />
      <p>
        {items.length}{" "}
        {items.length === 0 || items.length > 1 ? "Tasks" : "Task"}
      </p>
      <p>
        {left.length}
        {left.length === 0 || left.length > 1 ? "Tasks" : "Task"} to do
      </p>
      <p>
        {done.length} {done.length === 0 || done.length > 1 ? "Tasks" : "Task"}{" "}
        done!
      </p>
    </>
  );
};

export default Header;
