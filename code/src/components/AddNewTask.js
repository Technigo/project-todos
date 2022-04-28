import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import uniqid from "uniqid";

import tasks from "reducers/tasks";
import { devices } from "styles";

const NewTaskWrapper = styled.section`
  display: flex;
  justify-content: flex-end;

  @media ${devices.tablet} {
    margin-right: 13%;
  }
`;
const NewTask = styled.div`
  display: flex;
  flex-direction: column;
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
  margin: 0;
  padding: 0;
`;
const NewTaskBtnText = styled.p`
  font-size: medium
  font-weight: 600;
  transition: 0.3s ease-in-out;
  color: black;

  &:hover {
    margin-left: 5px;
  }

  @media ${devices.tablet} {
    font-size: x-large;
  }
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  transition: 0.3s ease-in-out;
  margin: 0;
  color: black;

  &:hover {
    margin-right: 5px;
  }
`;

const Input = styled.input`
  border: 1px solid #dcdcdc;
  height: 30px;
  width: 70vw;
  padding: 2px 5px 2px 10px;
  line-break: normal;

  @media ${devices.tablet} {
    height: 50px;
    width: 65vw;
  }
`;

const SubmitBtn = styled.button`
  border-radius: 0px 9px 9px 0;
  border: 1px solid #dcdcdc;
  height: 36px;
  background-color: #ffbcbc;
  color: white;
  font-size: x-large;
  font-weight: 600;
  padding: 5px;

  @media ${devices.tablet} {
    height: 56px;
    width: 40px;
  }
`;
const FormWrapper = styled.div`
display: flex;
align-items: center;
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
        <NewTaskbtn onClick={toggleClass}>
          <Icon
            src="../images/icons8-plus-math-26.png"
            className={isActive ? "img-hidden" : "img-active"}
          ></Icon>
          <NewTaskBtnText className={isActive ? "text-hidden" : "text-active"}>
            NEW TASK
          </NewTaskBtnText>
        </NewTaskbtn>

        <NewTaskbtn onClick={toggleClass}>
          <Icon
            src="../images/icons8-minus-24.png"
            className={isActive ? "img-active" : "img-hidden"}
          ></Icon>
          <NewTaskBtnText className={isActive ? "text-active" : "text-hidden"}>
            NEW TASK
          </NewTaskBtnText>
        </NewTaskbtn>
        <form onSubmit={onFormSubmit}>
      <FormWrapper>
            <Input
              className={isActive ? "input-active" : "input-hidden"}
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Add new to do "
            />
          <SubmitBtn
            className={isActive ? "button-active" : "button-hidden"}
            type="submit"
          >
            +
          </SubmitBtn>
        </FormWrapper>
        </form>
      </NewTask>
    </NewTaskWrapper>
  );
};
export default AddNewTask;
