import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import tasks from "../reducers/tasks";

const Section = styled.section`
  position: absolute;
  bottom: 0px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
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
        <input
          type="text"
          value={input}
          onKeyDown={(e) => checkKey(e)}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={onAddTask} disabled={input.length === 0}>
          +
        </button>
      </form>
    </Section>
  );
};

export default AddTask;
