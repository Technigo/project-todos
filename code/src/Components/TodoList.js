import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { todo } from 'reducers/todo';

export const TodoList = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  //Denna funktionen tar det som är i input statet och skickar till funktionen i the store. tror jag...
  const onAddToDo = () => {
    dispatch(todo.actions.addTodo(input));
  };
  const listWithTodos = useSelector((store) => store.todo.items);

  return (
    <>
      <div className="container">
        <h1>TodoList</h1>
        <input
          type="text"
          placeholder="write your Todo:"
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={onAddToDo}>Add ToDo</button>
      </div>
      <TheList>
        {listWithTodos.map((item, index) => (
          <>
            <input type="radio"></input>
            <p>{item.text}</p>
          </>
        ))}
      </TheList>
    </>
  );
};

const TheList = styled.div`
  display: flex;
  align-items: center;
`;
