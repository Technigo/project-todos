import React from "react";
import { useDispatch } from "react-redux";
import { tasks } from "../reducers/tasks";
import styled from "styled-components";
import moment from "moment";

export const Task = props => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.markComplete(props.task.id));
  };

  return (
    <Item>
      <ItemLabel>
        <Check
          type="checkbox"
          checked={props.task.complete}
          onChange={handleCheckboxClick}
        />
        <ItemInfo>
          <ItemText completed={props.task.complete}>{props.task.text}</ItemText>
          <ItemAdded completed={props.task.complete}>
            {props.task.complete
              ? "Completed " + moment(props.task.completed).fromNow()
              : "Added " + moment(props.task.added).fromNow()}
          </ItemAdded>
        </ItemInfo>
      </ItemLabel>
    </Item>
  );
};

const Item = styled.li`
  height: 85px;
  list-style: none;
  width: 100%;
  background-color: #fdfdfd;
  margin-bottom: 2px solid #f0f0f0;
  border-bottom: 2px solid #f0f0f0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  overflow: auto;
`;

const ItemLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Check = styled.input`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #5071f2;
  outline: none;
  margin: 0px 20px;
  opacity: 1

  &:checked {
    background-color: #5071f2;
    color: #fff;
    opacity: 0.6;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemText = styled.p`
  opacity: ${props => (props.completed ? "0.6" : "1")};
  display: inline-block;
  overflow: hidden;
  margin: 0px;
`;

const ItemAdded = styled.p`
  opacity: ${props => (props.completed ? "0.6" : "1")};
  font-size: 10px;
  margin: 0px;
`;
