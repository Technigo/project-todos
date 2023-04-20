/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      task: inputValue,
      isDone: false
    };
    dispatch(todos.actions.addTodo(newTodo));
    setInputValue('');
  }
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="task-input">Add a new task here:
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          id="task-input"
          type="text"
          placeholder="Press Enter"
          required />
      </label>
      <div className="lazy-cat-main">
        <Player
          autoplay
          loop
          src="https://lottie.host/e1545cc9-29b0-4fc7-bf99-cba9800c4de6/LHo0WS7dLJ.json"
          style={{ height: '150px', width: '150px' }}>
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </div>
    </form>
  )
}