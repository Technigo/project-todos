import React from "react";
import { useSelector, useDispatch } from "react-redux";
import todos from "reducers/todos";
import styled, { keyframes } from "styled-components/macro";
import deleteIcon from "../assets/delete-icon.png";
import completeAllIcon from "../assets/complete-all-icon.png";

const TodoListContainer = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 90vw;
  top: 59vh;
  left: 5vw;
  bottom: -30vh;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    top: 52vh;
    column-gap: 30px;
    height: 10vh;
  }
  @media (min-width: 992px) {
    top: 55vh;
  }
`;

const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 5px;
  padding: 5px;
  line-break: anywhere;
  background-color: #fcf9f07e;
  border-radius: 5px;
  @media (min-width: 768px) {
    row-gap: 30px;
    width: 35vw;
    padding: 10px;
  }
  @media (min-width: 992px) {
    font-size: 20px;
    width: 40vw;
    padding: 15px;
  }
`;

const jellyAnimation = keyframes`
  from { transform scale(1, 1) }
  30% { transform scale(1.25, 0.75) }
  40% { transform scale(0.75, 1.25) }
  50% { transform scale(1.15, 0.85) }
  65% { transform scale(.95, 1.05) }
  75% { transform scale(1.05, .95) }
  to { transform scale(1, 1) }
`;

const EmptyLabel = styled.label`
  position: relative;
  width: 17px;
  height: 17px;
  border: 1px solid #4a4737;
  border-radius: 10px;
  vertical-align: middle;
  transition: background 0.1s ease;
  cursor: pointer;
  &:after {
    position: absolute;
    top: 1px;
    left: 5px;
    width: 5px;
    height: 11px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transition: all 0.3s ease-in-out;
    transition-delay: 0.15s;
  }
`;

const StyledTodoText = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
`;

const Checkbox = styled.input`
  display: none;
  ~ ${StyledTodoText}::before {
    content: "";
    position: absolute;
    background-image: linear-gradient(
      transparent 0 48%,
      #4a4737 50% calc(50% + 2px),
      transparent calc(50% + 2px) 100%
    );
    width: 0;
    height: 100%;
    transition: width 0.2s linear;
    display: inline-block;
  }
  &:checked ~ ${StyledTodoText}::before {
    width: 100%;
  }
  &:checked ~ ${EmptyLabel} {
    border-color: transparent;
    background: #4a4737;
    animation: ${jellyAnimation} 0.6s ease;
  }
  &:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
`;

const StyledDate = styled.p`
  font-size: 12px;
  @media (min-width: 992px) {
    font-size: 14px;
  }
`;

const DeleteButtonIcon = styled.img`
  width: 35px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 992px) {
    width: 40px;
  }
`;

const InputAndText = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

const DateAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
`;

const DeleteCompleteAllContainer = styled.section`
  display: flex;
  align-items: center;
  column-gap: 50vw;
  @media (min-width: 768px) {
    position: absolute;
    column-gap: 60vw;
    left: 10vw;
    top: 45vh;
  }
  @media (min-width: 992px) {
    column-gap: 65vw;
  }
  @media (min-width: 1200px) {
    column-gap: 71vw;
  }
`;

const CompleteAllButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
`;

const CompleteAllIcon = styled.img`
  width: 40px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 992px) {
    width: 50px;
  }
`;

const CompleteTasks = styled.p`
  font-family: "Spartan", sans-serif;
  font-size: 12px;
  margin: 0;
  @media (min-width: 992px) {
    font-size: 14px;
  }
`;

const DeleteAllButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
`;

const DeleteAllIcon = styled.img`
  width: 40px;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 992px) {
    width: 50px;
  }
`;

const DeleteTasks = styled.p`
  font-family: "Spartan", sans-serif;
  font-size: 12px;
  margin: 0;
  @media (min-width: 992px) {
    font-size: 14px;
  }
`;

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onCompleteAll = () => {
    dispatch(todos.actions.completeAll());
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  const onDeleteAll = () => {
    dispatch(todos.actions.deleteAll());
    localStorage.clear();
  };

  return (
    <>
      <TodoListContainer>
        {items.map((item) => (
          <TodosContainer key={item.id}>
            <InputAndText>
              <Checkbox
                id={item.id}
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <EmptyLabel htmlFor={item.id}></EmptyLabel>
              <StyledTodoText htmlFor={item.id}>{item.text}</StyledTodoText>
            </InputAndText>
            <DateAndButton>
              <StyledDate>Created on: {item.timePosted}</StyledDate>
              <DeleteButton onClick={() => onDeleteTodo(item.id)}>
                <DeleteButtonIcon src={deleteIcon} />
              </DeleteButton>
            </DateAndButton>
          </TodosContainer>
        ))}
      </TodoListContainer>
      <DeleteCompleteAllContainer>
        <CompleteAllButton onClick={onCompleteAll}>
          <CompleteTasks>Complete all</CompleteTasks>
          <CompleteAllIcon src={completeAllIcon} />
        </CompleteAllButton>

        <DeleteAllButton onClick={onDeleteAll}>
          <DeleteTasks>Delete all</DeleteTasks>
          <DeleteAllIcon src={deleteIcon} />
        </DeleteAllButton>
      </DeleteCompleteAllContainer>
    </>
  );
};

export default TodoList;
