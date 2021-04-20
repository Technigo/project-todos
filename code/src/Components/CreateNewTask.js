import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../Reducers/todos";
import { Checkbox } from "./Checkbox";
import { SelectDeadline } from "./SelectDeadline";

export const CreateNewTask = () => {
  //variables
  const moment = require("moment");
  const dispatch = useDispatch();
  const currentTime = moment().format("MMMM Do YYYY");
  const checkboxArr = [
    { id: "no-deadline", text: "infinte" },
    { id: "deadline", text: "set deadline" },
  ];
  //states
  const [newTask, setNewTask] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [checkvalue, setCheckvalue] = useState("");

  //local functions
  const handleClick = () => {
    dispatch(
      todos.actions.createNewTodo({
        task: newTask,
        time: currentTime,
        deadline: dueTime,
      })
    );
    setNewTask("");
    setCheckvalue("");
  };

  const handleChange = (id) => {
    setCheckvalue(id);
    if (id === "no-deadline") {
      setDueTime("");
    } else {
      setDueTime(moment().format("YYYY-MM-DD"));
    }
  };

  //render
  return (
    <Section>
      <Container>
        <ContainerInner>
          <Button type="button" onClick={() => handleClick()}>
            +
          </Button>
          <Textarea 
            placeholder="Add task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </ContainerInner>
        <CheckboxWrapper>
          {checkboxArr.map((checkbox) => (
            <Label htmlFor={checkbox.id}>
              <Checkbox
                checked={checkvalue === checkbox.id}
                onChange={() => handleChange(checkbox.id)}
                id={checkbox.id}
                type="deadline"
              />
              {checkbox.text}
            </Label>
          ))}
        </CheckboxWrapper>
        {checkvalue === "deadline" ? (
          <SelectDeadline setDueTime={setDueTime} />
        ) : (
          <></>
        )}
      </Container>
    </Section>
  );
};

//styled components
const Section = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 98%;
  background-color: rgb(196, 232, 241);
  box-shadow: 0.5px 0.5px 1px 1px rgb(88, 88, 102);
`;

const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  border-bottom: dashed rgb(196, 232, 241) 0.5px;
  font-size: 20px;
  overflow-y: auto;
  background-color: white;
  width: 100%;
`;

const Button = styled.button`

  margin: 0 10px;
  margin-top: -18px;
  font-size: 30px;
  width: 40px;
  height: 40px;
  border: none;
  color: rgb(196, 232, 241);
  background-color: rgba(196, 232, 241, 0);
  outline: none;
`;

const Textarea = styled.textarea`
  width: 100%;
  flex: 1 1 auto;
  border: none;
  font-size: 20px;
  outline: none;
  color: rgb(40, 91, 104);
  padding: 40px 0;
  
  &::placeholder {
    font-family: "Raleway", sans-serif;
    color: rgb(196, 232, 241);
  }

  &::focus,
  &::hover {
    background-color: rgb(196, 232, 241);
  }
`;

const Label = styled.label`
  margin-left: 10px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  padding: 5px;
`;
