import React from "react";
import { useSelector } from "react-redux";

const CompletedTodos = () => {
  const completedItems = useSelector((store) =>
    store.todos.items.filter((item) => item.isComplete)
  );

  return (
    <div>
      {completedItems.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CompletedTodos;
