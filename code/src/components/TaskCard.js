import React from "react";
import { useDispatch } from "react-redux";
import moment from 'moment'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from '@material-ui/core/Checkbox';

import todos from "../reducers/todos";
import styled from "styled-components";

import { RemoveButton } from "../styledcomponents/Buttons";


const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  border-bottom: 1px solid ${props => props.theme.primary};
`;

const TextDeleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckDeleteBox = styled.div`
  display: flex;`

const TextDateBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
`;

const TaskText = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  word-break: break-all;
`;

const DateBox = styled.div`
  display: flex;
  margin-top: 3px;
`;

const DateText = styled.p`
  font-size: 11px;
  font-family: ${props => props.theme.fontFamily};
  margin: 0 7px 0 0;
  display: flex;
  align-items: center;
`;

const DateTextDue = styled(DateText)`
  ${props =>
    props.due ?
    `
    color: black;
    `:  `
    color: red;
  `};
`;

const BoldText = styled.p`
  font-weight: bold;
  margin: 0 3px 0 0;
`;


export const TaskCard = (props) => {
  const { id, task, category, isComplete, dueDate } = props.taskInfo
  const dispatch = useDispatch();

  const dateCreated = moment().format("DD/MM YYYY");
  const dateDue = moment(dueDate).format("DD/MM YYYY");

  return (
    <Task>
      <TextDeleteBox>
        <FontAwesomeIcon icon={category} style={{ fontSize: 18 }} />
        <TextDateBox>
          <TaskText>{task}</TaskText>
          <DateBox>
            <DateText><BoldText>Created: </BoldText> {dateCreated}</DateText>
            <DateTextDue due={dateCreated <= dateDue}><BoldText>Due: </BoldText> {dateDue}</DateTextDue>
          </DateBox>
        </TextDateBox>
      </TextDeleteBox>
      <CheckDeleteBox>
        <Checkbox
          size="medium"
          type="checkbox" 
          color="secondary"
          checked={isComplete}
          onChange={() => dispatch(todos.actions.toggleComplete(id))}
          inputProps={{ "aria-label": "Check task" }}
        />
        <RemoveButton onClick={() => dispatch(todos.actions.removeTask(id))}><FontAwesomeIcon icon="trash-alt" /></RemoveButton>
      </CheckDeleteBox>
    </Task>
  )
};