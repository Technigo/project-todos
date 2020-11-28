import React from "react";
import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

import { TimeAgo } from "./TimeAgo";
import { ListItem, TimeText, ButtonWrapper, TextWrapper, Title, ItemText } from "../lib/ListStyle";
import { EditIcon } from "../lib/EditIcon";
import { RemoveTodoIcon } from "../lib/RemoveIcon";

export const Item = ({ item }) => {
  const dispatch = useDispatch();

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
      </TextWrapper>
      <ButtonWrapper>
        <Link to={`/todo/${item.id}`}>
            <EditIcon />
        </Link>
        <RemoveTodoIcon onClick={() => onItemRemove(item.id)}>
            <DeleteOutlinedIcon />
        </RemoveTodoIcon>
      </ButtonWrapper>
    </ListItem>
  );
};
