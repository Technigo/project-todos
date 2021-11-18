import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import moment from "moment";

import todo from "reducers/todo";
import { Section, StyledButton } from "./GlobalStyledComponents";
import NoTask from "./NoTask";

const TaskContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
`;

const TaskInnerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledParagraph = styled.p`
  padding-left: 5px;
`;

const StyledCheckbox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid #3385ff;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  &:checked {
    background-color: #3385ff;
  }
`;

const ButtonContainer = styled.div`
margin-left`;
const DateTask = styled.p``;

const TodoList = () => {
  const MyList = useSelector((store) => store.todo.list);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todo.actions.toggleStatus(id));
  };

  const onRemoveTodo = (id) => {
    dispatch(todo.actions.removeTodo(id));
  };
  console.log(MyList);
  return (
    <Section>
      {MyList.length === 0 ? (
        <NoTask />
      ) : (
        MyList.map((item) => (
          <TaskContainer key={item.id}>
            <TaskInnerContainer>
              <StyledCheckbox
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <StyledParagraph>{item.text}</StyledParagraph>
            </TaskInnerContainer>
            <ButtonContainer>
              <StyledButton onClick={() => onRemoveTodo(item.id)}>
                <span className="emoji" role="img" aria-label="minus sign">
                  ➖
                </span>
              </StyledButton>
            </ButtonContainer>
            {/* <DateTask>{moment(item.date).format("MM Do")}</DateTask> */}
          </TaskContainer>
        ))
      )}
    </Section>
  );
};

export default TodoList;
