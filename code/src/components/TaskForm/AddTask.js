import React from "react";
import { useSelector } from "react-redux";
import Select from "react-select";

import { PickDate } from "./PickDate";
import { SubmitButton } from "../../styledcomponents/StyledButtons";
import { 
  Form, 
  Input, 
  Options, 
  LabelText, 
  CategoryDate } from "../../styledcomponents/StyledTaskForm";


export const AddTask = ({ 
  handleSubmit, 
  handleSelect, 
  handleDate, 
  handleInput, 
  category, 
  dueDate, 
  task }) => {

  const categories = useSelector((state) => state.todos.categories);

  return (
    <Form onSubmit={handleSubmit}>
      <CategoryDate>
        <Options>
          <LabelText>Choose category:</LabelText>
          <Select
            value={category}
            onChange={handleSelect}
            options={categories}
          />
        </Options>
        <PickDate 
          onChange={handleDate}
          selected={dueDate}
        />
      </CategoryDate>
      <Input
        type="text"
        placeholder="Task description"
        value={task}
        onChange={handleInput}
        minLength="3"
        maxLength="30"
        required />
      <SubmitButton type="submit">Add Task</SubmitButton>
    </Form>
  )
};