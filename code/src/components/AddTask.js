import React from 'react';

export const AddTask = () => {
  return (
    <form>
      <input type="text" placeholder="Your Todo" />
      <button type="submit">Add Task</button>
    </form>
  );
};
