import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/macro";
import moment from "moment";

import todo from "reducers/todo";
import { Section, StyledButton } from "./GlobalStyledComponents";
import NoTask from "./NoTask";

const TaskContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 300px;
  border-bottom: 1px solid #f2f2f2;

  @media (min-width: 768px) {
    width: 520px;
  }

  @media (min-width: 992px) {
    width: 700px;
    margin-left: -18px;
  }
`;

const TaskOuterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TaskInnerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40px;
  padding-left: 5px;

  @media (min-width: 768px) {
    padding-left: 0;
  }
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

const TextContainer = styled.div`
  width: 230px;

  @media (min-width: 768px) {
    width: 450px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateTask = styled.p`
  font-style: italic;
  padding-left: 10px;

  @media (min-width: 992px) {
    padding-left: 3px;
  }
`;

const TodoList = () => {
  const MyList = useSelector((store) => store.todo.list);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todo.actions.toggleStatus(id));
  };

  const onRemoveTodo = (id) => {
    dispatch(todo.actions.removeTodo(id));
  };

  return (
    <Section className="test">
      {MyList.length === 0 ? (
        <NoTask />
      ) : (
        MyList.map((item) => (
          <TaskContainer key={item.id}>
            <TaskOuterContainer>
              <TaskInnerContainer>
                <StyledCheckbox
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={() => onToggleTodo(item.id)}
                />
              </TaskInnerContainer>
              <TextContainer>
                <p>{item.text}</p>
              </TextContainer>
              <ButtonContainer>
                <StyledButton onClick={() => onRemoveTodo(item.id)}>
                  <span className="emoji" role="img" aria-label="minus sign">
                    ➖
                  </span>
                </StyledButton>
              </ButtonContainer>
            </TaskOuterContainer>
            <DateTask>
              Task created: {moment(item.date).format("MMM Do")}
            </DateTask>
          </TaskContainer>
        ))
      )}
    </Section>
  );
};

export default TodoList;
