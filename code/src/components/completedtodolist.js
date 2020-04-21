import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos.js';

export const CompletedTasks = () => {
  const list = useSelector((store) => store.todos.list);
  const tasks = list.items.filter((item) => item.completed === true);

  if (tasks == 0) {
    return <></>;
  } else {
    return (
      <section>
        <h3>Stuff you got done today:</h3>
        {tasks.map((item) => (
          <p>{item.text}</p>
        ))}
      </section>
    );
  }
};

export const CompletedShopping = () => {
  const list = useSelector((store) => store.todos.list);
  const shopping = list.items.filter((item) => item.shopped === true);

  if (shopping == 0) {
    return <></>;
  } else {
    return (
      <div>
        <h3>Stuff you remembered to buy:</h3>
        {shopping.map((item) => (
          <p>{item.text}</p>
        ))}
      </div>
    );
  }
};
