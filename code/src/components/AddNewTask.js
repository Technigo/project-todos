import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import uniqid from "uniqid";

import tasks from "reducers/tasks";

const NewTaskWrapper = styled.section`
  display: flex;
  justify-content: flex-end;
`;
const NewTask = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
`;

const NewTaskbtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: min-content;
  /* margin-left: 10px; */
`;
const NewTaskBtnText = styled.p`
  font-size: large;
  font-weight: 600;
  transition: 0.3s ease-in-out;

  &:hover {
    margin-left: 5px;
  }
`;

const PlusIcon = styled.img`
  height: 20px;
  width: 20px;
  transition: 0.3s ease-in-out;
  margin: 0;

  &:hover {
    margin-right: 5px;
  }
`;

const Input = styled.input`
  border: 1px solid #dcdcdc;
  height: 30px;
  width: 45vw;
  padding: 2px 5px 2px 10px;
  word-break: break-all;
`;

const SubmitBtn = styled.button`
border-radius: 0px 9px 9px 0 ;
height: 33px;
border: none;
background-color: #FFBCBC;
color: white;
font-size: x-large;
font-weight: 600;

`

const AddNewTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const onFormSubmit = (event) => {
    event.preventDefault(onFormSubmit);

    const newTask = {
      id: uniqid(),
      text: inputValue,
      isComplete: false,
    };

    dispatch(tasks.actions.addItem(newTask));

    setInputValue("");
  };

  return (
    <NewTaskWrapper>
      <NewTask>
        <form onSubmit={onFormSubmit}>
          <label>
            <Input
              className={isActive ? "input-active" : "input-hidden"}
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Add new to do "
            />
          </label>
          <SubmitBtn
            className={isActive ? "button-active" : "button-hidden"}
            type="submit"
          >
            +
          </SubmitBtn>
        </form>

        <NewTaskbtn onClick={toggleClass}>
          <PlusIcon src="../images/icons8-plus-math-26.png"></PlusIcon>
          <NewTaskBtnText>NEW TASK</NewTaskBtnText>
        </NewTaskbtn>
      </NewTask>
    </NewTaskWrapper>
  );
};
export default AddNewTask;
