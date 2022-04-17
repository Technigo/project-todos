import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import tasks from "../reducers/tasks";

const Section = styled.section`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  height: 64px;
  width: 348px;
  position: absolute;
  bottom: 20px;
  background-color: aliceblue;
  padding-bottom: 24px;
  padding-top: 8px;
`;

const Form = styled.form`
  /* display: flex;
  flex-direction: row;
  align-items: center; */
`;

const Input = styled.input`
  border: solid 5px #604fd1;
  padding: 12px;
  border-radius: 10px;
  width: 200px;

  &:focus {
    outline: none;
  }
`;

const SubmitBtn = styled.button`
  margin: 8px;
  width: 40px;
  font-size: 30px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #604fd1;
`;

const AddTask = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const checkKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      onAddTask(e);
    }
  };

  const onAddTask = () => {
    dispatch(tasks.actions.addTask(input));
    setInput("");
  };

  return (
    <div>
      <Section>
        <Form onSubmit={onFormSubmit}>
          <Input
            type="text"
            value={input}
            onKeyDown={(e) => checkKey(e)}
            onChange={(e) => setInput(e.target.value)}
          />
        </Form>
        <div>
          <SubmitBtn
            type="submit"
            onClick={onAddTask}
            disabled={input.length === 0}
          >
            +
          </SubmitBtn>
        </div>
      </Section>
    </div>
  );
};

export default AddTask;
