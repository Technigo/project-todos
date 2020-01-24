import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import styled from "styled-components";
import { tasks } from "../reducers/tasks";

export const Header = () => {
  const numberOfTasks = useSelector(store => store.tasks.tasks.length);
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(tasks.actions.clearCompleted(true));
  };

  return (
    <ToDoHeader>
      <SubHeader>
        <BoldText>Todo</BoldText>
        <RegularText>{moment().format("MMM Do")}</RegularText>
      </SubHeader>
      <SubHeader right>
        <RegularText>{numberOfTasks} tasks</RegularText>
        <ClearAll type="button" onClick={clearAll}>
          Clear all
        </ClearAll>
      </SubHeader>
    </ToDoHeader>
  );
};

const ToDoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
  background-color: #f2f2f2;
`;

const SubHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: ${props => (props.right ? "flex-end" : "flex-start")};
  margin: ${props =>
    props.right ? "10px 20px 10px 0px" : "10px 0px 10px 20px"};
`;

const BoldText = styled.p`
  font-weight: 600;
  margin: 0px 0px 5px 0px;
  color: #343434;
  font-size: 20px;
`;

const RegularText = styled.span`
  margin: 0;
  color: #4a4a4a;
`;

const ClearAll = styled.button`
  border: none;
  background-color: #5071f2;
  color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 3px 3px;
  box-shadow: 1px 1px 2px blue;
  margin-top: 5px;
`;
