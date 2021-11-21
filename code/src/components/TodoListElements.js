import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import todos from "../reducers/todos";

const { DateTime } = require("luxon");

const HeadingTwo = styled.h2`
  font-family: "Ranga", cursive;
  font-size: 28px;
  line-height: 28px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-right: 10px;
  text-align: center;
`;

const HeadingThree = styled.h3`
  font-family: "Ranga", cursive;
  font-size: 22px;
  line-height: 28px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 300px;
`;

const HeadingList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  &:nth-child(2n-1) {
    background-color: ${(prop) =>
      prop.heading === "Prio 1"
        ? "rgba(203, 155, 237, 0.5)"
        : prop.heading === "Prio 2"
        ? "rgba(155, 183, 211, 0.5)"
        : prop.heading === "Prio 3"
        ? "rgba(237, 203, 155, 0.5)"
        : "rgba(162, 162, 97, 0.5)"};
  }

  &:nth-child(2n) {
    background-color: ${(prop) =>
      prop.heading === "Prio 1"
        ? "rgba(151, 55, 219, 0.5)"
        : prop.heading === "Prio 2"
        ? "rgba(72, 114, 157, 0.5)"
        : prop.heading === "Prio 3"
        ? "rgba(218, 146, 46, 0.5)"
        : "beige"};
  }
`;

const DeleteButton = styled.div`
  position: relative;
  display: inline-block;
  margin: 5px;
  padding: 5px 5px;
  text-align: center;
  font-family: inherit;
  font-size: 12px;
  text-decoration: none;
  color: black;
  background: rgba(218, 46, 46, 0.3);
  cursor: pointer;
  transition: ease-out 0.5s;
  border-radius: 30px;
  border: 2px solid rgba(146, 21, 21, 0.6);
  border-radius: 50%;
  box-shadow: inset 0 0 0 0 rgba(146, 21, 21, 0.3);
  width: 12px;
  height: 12px;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 rgba(146, 21, 21, 0.3);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  margin-top: 0;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0;
`;

const SmallText = styled.p`
  font-size: 10px;
  margin-bottom: 0;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Tag = styled.div`
  background: purple;
  color: white;
  padding: 2px;
  width: max-content;
  height: min-content;
  border-radius: 10%;
  margin: 3px;
`;

const TagText = styled.p`
  font-size: 10px;
  margin: 0;
  padding: 0;
`;

const TodoListElements = ({ list, heading }) => {
  const dispatch = useDispatch();
  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  const checkList = () => {
    if (
      list.filter((item) => item.isComplete).length === list.length
    ) {
      return "All done!";
    } else return "Some tasks left...";
  };

  const checkDate = (item_date) => {
    const date = DateTime.fromJSDate(item_date)
      .setZone("Europe/Stockholm")
      .toFormat("dd LLL yyyy");
    if (date === "Invalid DateTime") {
      return DateTime.fromISO(item_date)
        .setZone("Europe/Stockholm")
        .toFormat("dd LLL yyyy");
    } else return date;
  };

  if (list.length) {
    return (
      <MainWrapper>
        <HeadingList>
          <HeadingTwo>{heading}</HeadingTwo>
          <HeadingThree>{checkList()}</HeadingThree>
        </HeadingList>
        {list.map((item) => (
          <Wrapper key={item.id} heading={heading}>
            <SmallWrapper>
              <SmallText>Deadline: {checkDate(item.date)}</SmallText>
              <SmallText>
                Added:{" "}
                {DateTime.fromISO(item.added)
                  .setZone("Europe/Stockholm")
                  .toFormat("dd LLL yyyy")}
              </SmallText>
            </SmallWrapper>
            <ListItem>
              <FlexRow>
                <input
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => onToggleTodo(item.id)}
                />
                <p>{item.text}</p>
              </FlexRow>
              <DeleteButton onClick={() => onDeleteTodo(item.id)}>
                X
              </DeleteButton>
            </ListItem>
            <Tags>
              {" "}
              {item.tags.map((tag) => (
                <Tag key={tag.value}>
                  <TagText>{tag.value}</TagText>
                </Tag>
              ))}
            </Tags>
          </Wrapper>
        ))}
      </MainWrapper>
    );
  } else return null;
};

export default TodoListElements;
