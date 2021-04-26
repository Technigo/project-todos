import React from "react";
import { useDispatch } from "react-redux";
import moment from 'moment'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, Checkbox } from '@material-ui/core/';

import todos from "../../reducers/todos";
import { DeleteButton } from "./DeleteButton";
import { 
  Task, 
  TextDeleteBox, 
  IconBox, 
  CheckDeleteBox, 
  TextDateBox, 
  TaskText, 
  DateTextDue, 
  BoldText } from "../../styledcomponents/StyledTaskCard";


export const TaskCard = ({ taskInfo }) => {
  const { id, task, category, isComplete, dueDate, icon } = taskInfo;
  const dispatch = useDispatch();

  const today = moment().format("DD/MM YYYY");
  const dateDue = moment(dueDate).format("DD/MM YYYY");

  return (
    <Task>
      <TextDeleteBox>
        <Tooltip title={category}>
          <IconBox>
            <FontAwesomeIcon icon={icon} className="icon" />
          </IconBox>
        </Tooltip>
        <TextDateBox>
          <TaskText>{task}</TaskText>
          <DateTextDue due={today <= dateDue}><BoldText>Due: </BoldText> {dateDue}</DateTextDue>
        </TextDateBox>
      </TextDeleteBox>
      <CheckDeleteBox>
        <Tooltip title="Check Task">
          <Checkbox
            size="medium"
            type="checkbox" 
            color="secondary"
            checked={isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(id))}
            inputProps={{ "aria-label": "Check task" }}
          />
        </Tooltip>
        <DeleteButton onClick={() => dispatch(todos.actions.removeTask(id))} />
      </CheckDeleteBox>
    </Task>
  )
};