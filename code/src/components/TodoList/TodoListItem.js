import React from "react";
import styled from "styled-components/macro";
import { CategoryIcon } from "../CategoryIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/pro-light-svg-icons";
import { useDispatch } from "react-redux";
import { todo } from "reducers/todo";
import moment from "moment";
import { grayColor, mainColor } from "../style/colors";

export const TodoListItem = ({ item }) => {
  const dispatch = useDispatch();

  // Function that sets so that the text changes color depending if their is still time to accomplish the todo or not.
  const dueDateColor = () => {
    const dueDateWithoutTime = new Date(item.dueDate);
    dueDateWithoutTime.setHours(0, 0, 0, 0);
    const currentDateWithoutTime = new Date();
    currentDateWithoutTime.setHours(0, 0, 0, 0);

    if (dueDateWithoutTime.getTime() === currentDateWithoutTime.getTime()) {
      return mainColor;
    }

    if (item.dueDate <= new Date().getTime()) {
      return "red";
    }
    return grayColor;
  };

  return (
    <Item>
      <CategoryIcon
        category={item.category}
        completed={item.completed}
        canClick={true}
        id={item.id}
      />
      <div>
        <ItemHeader>{item.title}</ItemHeader>
        <ItemLocation>{item.place}</ItemLocation>
        <ItemDueDate style={{ color: dueDateColor() }}>
          Due date {moment(new Date(item.dueDate)).format(`MM/DD-YYYY`)}
        </ItemDueDate>
        <CreatedAt>
          Created {moment(new Date(item.createdAt)).fromNow()}
        </CreatedAt>
      </div>
      <TrashIcon>
        {/* When pressing the trashcan button the dispatch call for the removeTodo function in the global state. The payload is the id of the todo. */}
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faTrash}
          onClick={() => dispatch(todo.actions.removeTodo({ id: item.id }))}
        />
      </TrashIcon>
    </Item>
  );
};

const Item = styled.div`
  border-bottom: solid 1px ${grayColor};
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(217, 138, 96, 0.1);
  }
`;

const ItemHeader = styled.div`
  font-size: 16px;
`;

const ItemLocation = styled.div`
  color: ${grayColor};
  font-size: 14px;
`;

const ItemDueDate = styled.div`
  color: ${grayColor};
  font-size: 14px;
`;

const CreatedAt = styled.div`
  color: ${grayColor};
  font-size: 14px;
`;

const TrashIcon = styled.div`
  &:hover {
    color: ${mainColor};
    font-size: 20px;
    transition: all 200ms ease-in-out;
  }
`;
