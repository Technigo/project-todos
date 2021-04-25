import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import todos from "../reducers/todos";
import EmptyList from "../assets/emptyList.png";
import SubHeader from "../components/SubHeader";
import { CgClose } from "react-icons/cg";

import {
  MainWrapper,
  ItemList,
  Paragraph,
  Title,
  CompleteTask,
  SendButton,
  ListWapper,
  ParagraphWrapper,
  EmptyListImage,
} from "../styled/StyledComponent";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();
  const [removeItems, setRemoveItems] = useState(false);

  const dateConverter = `
  ${new Date().toLocaleString("default", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  })}`;

  return (
    <MainWrapper>
      <Title>My Day</Title>
      <Paragraph>{dateConverter}</Paragraph>
      <SubHeader removeItems={removeItems} setRemoveItems={setRemoveItems} />

      <ListWapper>
        {items.length ? (
          items.map((todo, index) => (
            <ItemList key={todo.id}>
              <ParagraphWrapper>
                <Paragraph>{todo.taskDescription}</Paragraph>
                <Paragraph
                  style={{ fontSize: 10, marginTop: 0, marginBottom: 5 }}
                >
                  {new Date(todo.timestamp).toLocaleString("default", {
                    day: "2-digit",
                    month: "long",
                  })}
                </Paragraph>
              </ParagraphWrapper>

              {removeItems ? (
                <SendButton
                  onClick={() => dispatch(todos.actions.removeTask(index))}
                >
                  <CgClose size={30} color="#cf3a3a" />
                </SendButton>
              ) : (
                <CompleteTask
                  type="checkbox"
                  checked={todo.isComplete}
                  onChange={() =>
                    dispatch(todos.actions.toggleComplete(todo.id))
                  }
                ></CompleteTask>
              )}
            </ItemList>
          ))
        ) : (
          <EmptyListImage src={EmptyList} />
        )}
      </ListWapper>
    </MainWrapper>
  );
};

export default TodoList;
