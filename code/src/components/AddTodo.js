import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import { todos } from "../reducers/Todos";
import { SubmitButton, Input, Form, DueButton, DueDateContainer } from "./StyledComponents";

export const NewTodo = ({ addTodo }) => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [startDate, setStartDate] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(todos.actions.addTodo({ newTodo, startDate }));
    setNewTodo("");
    setStartDate(null);
  };

  const ExampleCustomInput = ({ onClick }) => <DueButton onClick={onClick}>Add due date</DueButton>;

  return (
    <>
      {addTodo && (
        <>
          <Form>
            <Input type="text" onChange={(event) => setNewTodo(event.target.value)} value={newTodo} required placeholder="+ Add new todo" />

            <SubmitButton type="submit" onClick={onSubmit}>
              +
            </SubmitButton>
          </Form>
          <DueDateContainer>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} customInput={<ExampleCustomInput />} />
            <span>{startDate ? `Due ${moment(startDate).format("MMM Do YYYY")}` : " "}</span>
          </DueDateContainer>
        </>
      )}
    </>
  );
};
