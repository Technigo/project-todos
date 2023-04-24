/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'redux/reducers/todos';
import { DefaultButton } from 'styles/Button';
// import { TagsInput } from 'components/TagsInput/TagsInput';
import {
  NewToDo,
  Input,
  AddContainer,
  Select,
  Option
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
        <Select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}>
          <Option value="">Select a category</Option>
          <Option value="Home">Home</Option>
          <Option value="Work">Work</Option>
          <Option value="Shopping">Buy</Option>
          <Option value="Other">Other</Option>
        </Select>
        <AddContainer>
          {/* <TagsInput /> */}
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