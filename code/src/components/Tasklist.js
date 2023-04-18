/* eslint-disable no-unused-vars */
import React from 'react';

import { useSelector } from 'react-redux';
import { tasks } from 'reducers/tasks';
import ListItem from './ListItem';

const Tasklist = () => {
  const items = useSelector((state) => state.tasks);
  console.log(items);
  items.map((item) => console.log(item.text));

  return (
    <section className="task-list">
      {items.map((item) => (
        <ListItem key={item.id} text={item.text} />
      ))}
    </section>
  );
};

export default Tasklist;
