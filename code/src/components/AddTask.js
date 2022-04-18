import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import tasks from "../reducers/tasks";

const Section = styled.section`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 348px;
  position: absolute;
  bottom: 24px;
  padding-top: 8px;
  padding-bottom: 42px;
  box-shadow: 0 -45px 29px -41px rgb(166 166 166 / 55%);

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
  /* alternative one */
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }

  /* alternative two
  border-bottom: 5px solid #27ae60;
  text-shadow: 0px -2px #27ae60;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;

  &:hover,
  &:active {
    -webkit-transform: translate(0px, 5px);
    -ms-transform: translate(0px, 5px);
    transform: translate(0px, 5px);
    border-bottom: 1px solid #2ecc71;
  } */
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
        <form onSubmit={onFormSubmit}>
          <Input
            type="text"
            value={input}
            onKeyDown={(e) => checkKey(e)}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
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
