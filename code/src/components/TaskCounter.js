import React from "react";
import { useSelector } from "react-redux";

const TaskCounter = () => {
  const items = useSelector((store) => store.tasks.items);

  const doneTasks = useSelector((store) =>
    store.tasks.items.filter((item) => item.isComplete === true)
  );

  if (items.length > 0) {
    return (
      <section>
        <p>You have {items.length} added todos</p>
        <p>You have complected {doneTasks.length}</p>
      </section>
    );
  } else if (doneTasks.length === 0) {
    return (
      <section>
        <p>Your todo list is empty</p>
        <p>Let's add some tasks!</p>
      </section>
    );
  }
};

export default TaskCounter;
