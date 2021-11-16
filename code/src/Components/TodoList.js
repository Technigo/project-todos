import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todo } from 'reducers/todo';

export const TodoList = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  //Denna funktionen tar det som är i input statet och skickar till funktionen i the store. tror jag...
  const onAddToDo = () => {
    dispatch(todo.actions.TodoList(input));
  };

  return (
    <div className="container">
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="write your Todo:"
        onChange={(event) => setInput(event.target.value)}
      />

      <button onClick={onAddToDo}>Add ToDo</button>
    </div>
  );
};
