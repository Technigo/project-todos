import React from "react";
import { useDispatch } from "react-redux";
import moment from 'moment'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

import todos from "../reducers/todos";
import { RemoveButton } from "../styledcomponents/StyledButtons";
import { 
  Task, 
  TextDeleteBox, 
  IconBox, 
  CheckDeleteBox, 
  TextDateBox, 
  TaskText, 
  DateTextDue, 
  BoldText } from "../styledcomponents/StyledTodoCard";


export const TodoCard = (props) => {
  const { id, task, category, isComplete, dueDate, icon } = props.taskInfo;
  const dispatch = useDispatch();

  const dateCreated = moment().format("DD/MM YYYY");
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
          <DateTextDue due={dateCreated <= dateDue}><BoldText>Due: </BoldText> {dateDue}</DateTextDue>
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
        <Tooltip title="Delete">
          <RemoveButton onClick={() => dispatch(todos.actions.removeTask(id))}>
            <FontAwesomeIcon className="trash-icon" icon="trash-alt" />
          </RemoveButton>
        </Tooltip>
      </CheckDeleteBox>
    </Task>
  )
};