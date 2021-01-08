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
import { CheckedTodoIcon } from "../lib/CheckedTodoIcon";
import { EditTodoIcon } from "../lib/EditTodoIcon";
import { DeleteTodoIcon } from "../lib/DeleteTodoIcon";

export const Item = ({ item }) => {
  const dispatch = useDispatch();

  const onItemDone = (id) => {
    dispatch(todos.actions.toggleDoneItem(id));
  }

  const onItemRemove = (id) => {
    dispatch(todos.actions.removeItem(id));
  };
  return (
    <ListItem strikethrough={item.isDone} isdone={item.isDone}>
      <TimeText>
        <TimeAgo createdAt={item.createdAt}>{item.createdAt}</TimeAgo>
      </TimeText>
      <TextWrapper>
        <Title>{item.title}</Title>
        <ItemText>{item.content}</ItemText>
      </TextWrapper>
      <ButtonWrapper>
        <CheckedTodoIcon isDone={item.isDone} onClick={() => onItemDone(item.id)}/>
        <Link to={`/todo/${item.id}`}>
          <EditTodoIcon isdone={item.isDone}/>
        </Link>
        <DeleteTodoIcon isdone={item.isDone} onClick={() => onItemRemove(item.id)} />
      </ButtonWrapper>
    </ListItem>
  );
};
