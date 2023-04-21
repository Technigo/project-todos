/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'redux/reducers/todos';
import { DefaultButton } from 'styles/Button';
import { TagsInput } from 'components/tagsinput/TagsInput';
import {
  NewToDo,
  Input,
  AddContainer
} from 'components/addtodo/AddToDo.style'

export const AddToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();

    const newToDo = {
      id: Date.now().toString(),
      createdAt: new Date(),
      text: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isDone: false
    };
    dispatch(todos.actions.addItem(newToDo));
    setInputValue('');
    // https://www.random.org
  };

  return (
    <section>
      <NewToDo onSubmit={onFormSubmit}>
        <label>
          {/* htmlFor={`new-todo-input${newToDo.id}`} */}
          <p>Add new task</p>
          <Input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)} />
          {/* id={`new-todo-input${newToDo.id}`} /> */}
        </label>
        <AddContainer>
          <TagsInput />
          <DefaultButton
            type="submit"
            disabled={inputValue.length === 0}
            title="Let's add something!">
          Add
          </DefaultButton>
        </AddContainer>
      </NewToDo>
    </section>
  );
};