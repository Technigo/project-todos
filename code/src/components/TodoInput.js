import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import { todos } from '../reducers/todos';
import { Button } from '../library/Button';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const dispatch = useDispatch();
  const history = useHistory();

  const categories = useSelector(store => store.todos.list.categories);
  console.log(categories);

  const onSubmit = event => {
    event.preventDefault();
    console.log(inputValue);
    dispatch(
      todos.actions.addTodo({
        todoItemInfo: {
          id: uuidv4(),
          description: inputValue,
          complete: false,
          category: category,
          dueDate: dueDate.getTime(),
          createdAt: new Date().getTime(),
        },
      })
    );
    history.goBack();
  };

  return (
    <Main>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}
          placeholder="Add todo"
        ></Input>
        <label>
          Due Date
          <DatePicker onChange={date => setDueDate(date)} value={dueDate} />
        </label>
        <select
          name="category"
          id="category"
          onChange={event => setCategory(event.target.value)}
          value={category}
        >
          <option value="">Category</option>
          {categories.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Button type="submit">Add Todo</Button>
      </Form>
    </Main>
  );
};

export default TodoInput;

const Main = styled.main`
  display: flex;
`;

const Form = styled.form`
  height: 50vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 25px;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  background-color: transparent;
  border: none;
  border-bottom: 0.5px solid lightgray;
  height: 30px;
  width: 100%;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  ::placeholder {
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    color: rgba(255, 255, 255, 0.4);
    padding-left: 5px;
  }
`;
