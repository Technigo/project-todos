import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

  const dispatch = useDispatch();
  // const amountOfTodos = useSelector((store) => store.todos.tasks.length + 1);
  const createID = Math.floor(Math.random() * 10000) + 1;

  const handleSubmit = (event) => {
    event.preventDefault();

    const createdAt = new Date();
    if (todo) {
      dispatch(
        todos.actions.addTodo({
          id: createID,
          task: todo,
          category: category,
          prio: prio,
          isCompleted: false,
          createdAt: createdAt,
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

        <NewTodoButton type="submit" value="submit" onClick={handleSubmit}>
          +
        </NewTodoButton>
      </NewTodoInnerWrapper>
    </NewTodoWrapper>
  );
};
