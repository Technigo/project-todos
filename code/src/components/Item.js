import React from "react";
import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";
import { Link } from "react-router-dom";

import { TimeAgo } from "./TimeAgo";
import {
  ListItem,
  TimeText,
  ButtonWrapper,
  TextWrapper,
  Title,
  ItemText,
} from "../lib/ItemListStyle";
import { DoneTodoIcon } from "../lib/DoneTodoIcon";
import { EditTodoIcon } from "../lib/EditTodoIcon";
import { DeleteTodoIcon } from "../lib/DeleteTodoIcon";

export const Item = ({ item, strikethrough }) => {
  const dispatch = useDispatch();

  const onItemDone = (id) => {
    dispatch(todos.actions.toggleDoneItem(id));
  }

  const onItemRemove = (id) => {
    dispatch(todos.actions.removeItem(id));
  };
  return (
    <ListItem>
      <TimeText>
        <TimeAgo createdAt={item.createdAt}>{item.createdAt}</TimeAgo>
      </TimeText>
      <TextWrapper>
        <Title>{item.title}</Title>
        <ItemText>{item.content}</ItemText>
        <ItemText>Is done: {item.isDone ? "yes" : "no"}</ItemText>
      </TextWrapper>
      <ButtonWrapper>
        <DoneTodoIcon onClick={() => onItemDone(item.id)}/>
        <Link to={`/todo/${item.id}`}>
          <EditTodoIcon />
        </Link>
        <DeleteTodoIcon onClick={() => onItemRemove(item.id)} />
      </ButtonWrapper>
    </ListItem>
  );
};
