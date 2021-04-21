import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Select from "react-select";
import Drawer from "@material-ui/core/Drawer";
import styled from "styled-components";

import { PickDate } from "./PickDate";
import todos from "../reducers/todos";
import { AddTaskButton, SubmitButton } from "../styledcomponents/Buttons";

const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px 20px 80px 20px;
  background-color: white;
  box-sizing: border-box;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 8px;
  margin: 10px 0;
  outline: none;
  background-color: #f2f2f2;
  border: none;
  width: 95%;
  font-family: ${props => props.theme.fontFamily};
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 90px;
  width: 100%;
  border-top: 1px solid ${props => props.theme.primary};
  background-color: ${props => props.theme.backgroundColor};
`;

const Options = styled.label`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 14px;
`;

const LabelText = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
  font-family: ${props => props.theme.fontFamily};
`;

const CategoryDate = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin: 0;
`;


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
              />
            </Options>
            <PickDate 
              onChange={dueDate => setDueDate(dueDate)}
              selected={dueDate}
            />
          </CategoryDate>
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