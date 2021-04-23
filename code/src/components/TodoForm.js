import React from "react";
import { useSelector } from "react-redux";

import Select from "react-select";

import { PickDate } from "./PickDate";
import { SubmitButton } from "../styledcomponents/StyledButtons";
import { 
  Form, 
  Input, 
  Options, 
  LabelText, 
  CategoryDate } from "../styledcomponents/StyledForm";


export const ToDoForm = ({ onSubmit, handleSelectChange, handleDateChange, handleInputChange, category, dueDate, task }) => {
  const categories = useSelector((state) => state.todos.categories);

  return (
    <Form onSubmit={onSubmit}>
      <CategoryDate>
        <Options>
          <LabelText>Choose category:</LabelText>
          <Select
            value={category}
            onChange={handleSelectChange}
            options={categories}
          />
        </Options>
        <PickDate 
          onChange={handleDateChange}
          selected={dueDate}
        />
      </CategoryDate>
      <Input
        type="text"
        placeholder="Task description"
        value={task}
        onChange={handleInputChange}
        minLength="3"
        maxLength="30"
        required />
      <SubmitButton type="submit">Add Task</SubmitButton>
    </Form>
  )
};