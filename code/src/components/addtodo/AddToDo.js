/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'redux/reducers/todos';
import { DefaultButton } from 'styles/Button';
import { TagsInput } from 'components/TagsInput/TagsInput';
import {
  NewToDo,
  Input,
  AddContainer
} from 'components/AddToDo/AddToDo.style'

export const AddToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();

    const newToDo = {
      id: Date.now().toString(),
      createdAt: new Date(),
      text: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isDone: false,
      category: selectedCategory
    };
    dispatch(todos.actions.addItem(newToDo));
    setInputValue('');
    setSelectedCategory('');
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
        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}>
          <option value="">Select a category</option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Shopping">Buy</option>
          <option value="Other">Other</option>
        </select>
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