import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';

import { NewTodoWrapper } from '../styling/GlobalStyling';
import {
  NewTodoInput,
  NewTodoInnerWrapper,
  NewTodoButton,
} from '../styling/NewTodoStyling';

// -----------------------------------------------------------------------------

export const NewTodo = () => {
  const [todo, setTodo] = useState('');
  const [category, setCategory] = useState('Fun');
  const [prio, setPrio] = useState(false);
  const [buttonColor, setButtonColor] = useState('gray');

  const dispatch = useDispatch();
  const amountOfTodos = useSelector((store) => store.todos.length + 1);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(amountOfTodos);

    if (todo) {
      dispatch(
        todos.actions.addTodo({
          id: amountOfTodos,
          task: todo,
          category: category,
          prio: prio,
          isCompleted: false,
        })
      );
      setTodo('');
      setCategory('Fun');
      setPrio(false);
    } else {
      alert('Please write a task first');
    }
  };

  return (
    <NewTodoWrapper>
      <NewTodoInput
        type="text"
        placeholder="Add new task..."
        onChange={(event) => setTodo(event.target.value)}
        value={todo}
      />

      <NewTodoInnerWrapper>
        <div>
          <label>Set category:</label>
          <select onChange={(event) => setCategory(event.target.value)}>
            <option value="Fun">Fun</option>
            <option value="Nom">Nom</option>
            <option value="Shop">Shop</option>
          </select>
        </div>
        <div>
          <label htmlFor="newTask">Prioritized?</label>
          <input
            type="checkbox"
            name="prioritized"
            id="newTask"
            checked={prio}
            onChange={() => setPrio(true)}
          />
        </div>

        <NewTodoButton
          color={buttonColor}
          type="submit"
          value="submit"
          onClick={handleSubmit}
        >
          +
        </NewTodoButton>
      </NewTodoInnerWrapper>
    </NewTodoWrapper>
  );
};
