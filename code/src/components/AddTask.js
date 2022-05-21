import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import tasks from "../reducers/tasks";

const Section = styled.section`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 348px;
  position: absolute;
  bottom: 20px;
  padding-bottom: 56px;

  @media (min-width: 667px) {
    justify-content: flex-end;
  }
`;

const Input = styled.input`
  border: solid 2px #6dbd89;
  padding: 12px;
  border-radius: 5px;
  width: 200px;

  &:focus {
    outline: none;
  }
`;

const SubmitBtn = styled.button`
  margin: 8px;
  width: 48px;
  height: 48px;
  font-size: 30px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  @media (min-width: 667px) {
    transition: all 0.3s ease 0s;

    &:hover {
      background-color: #6dbd89;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
    }
  }
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
    <Section>
      <form onSubmit={onFormSubmit}>
        <Input
          type='text'
          value={input}
          onKeyDown={(e) => checkKey(e)}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div>
        <SubmitBtn
          type='submit'
          onClick={onAddTask}
          disabled={input.length === 0}
        >
          +
        </SubmitBtn>
      </div>
    </Section>
  );
};

export default AddTask;
