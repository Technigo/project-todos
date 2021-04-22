import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Select from "react-select";
import Drawer from "@material-ui/core/Drawer";
import Divider from '@material-ui/core/Divider';

import { PickDate } from "./PickDate";
import todos from "../reducers/todos";
import { AddTaskButton, SubmitButton } from "../styledcomponents/StyledButtons";
import { Form, Input, BottomContainer, Options, LabelText, CategoryDate } from "../styledcomponents/StyledTaskForm";


export const TaskForm = () => {
  const categories = useSelector((state) => state.todos.categories);
  const [openForm, setOpenForm] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
    
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(todos.actions.addTask({ task, category, dueDate }));
    setTask("");
    setCategory("");
    setDueDate(new Date());
    setOpenForm(false);
  };

  return (
    <>
      <BottomContainer>
        <AddTaskButton onClick={() => setOpenForm(true)}>+</AddTaskButton>
      </BottomContainer>
      <Drawer 
        anchor="bottom"
        open={openForm}         
        onClose={() => setOpenForm(false)}
        onOpen={() => setOpenForm(true)}>
        <Form onSubmit={onFormSubmit}>
          <CategoryDate>
            <Options>
              <LabelText>Choose category:</LabelText>
              <Select
                value={category.icon}
                onChange={category => setCategory(category.icon)}
                options={categories}
                required="true"
              />
            </Options>
            <Divider variant="middle" />
            <PickDate 
              onChange={dueDate => setDueDate(dueDate)}
              selected={dueDate}
            />
          </CategoryDate>
          <Divider variant="middle" />
          <Input
            type="text"
            placeholder="Task description"
            value={task}
            onChange={e => setTask(e.target.value)}
            minLength="3"
            maxLength="30"
            required />
          <SubmitButton type="submit">Add Task</SubmitButton>
        </Form>
      </Drawer>
    </>
  )
};