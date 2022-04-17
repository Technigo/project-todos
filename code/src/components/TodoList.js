import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import todos from "../reducers/store";

const TodoCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 250px;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

const TodoLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  background-color: #ffd7f0;
  padding: 0 20px;
  width: 90%;
  margin-bottom: 15px;
`;

const TodoInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 15px 0 15px 0;
`;

const TodoDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  font-size: 12px;

  p {
    margin: 2px;
  }
`;

const TodoText = styled.p`
  font-size: 16px;
  color: #004aad;
`;

const TimeText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #e4fd81;

  span {
    margin-right: 4px;
    font-size: 10px;
  }
`;

const Complete = styled.input`
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 5px;
  border: 2px solid #e4fd81;
`;

const Delete = styled.button`
  border: none;
  display: flex;
  justify-content: flex-start;
  padding: 0;
`;

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };
  return (
    <TodoCard>
      {items.map((item) => (
        <TodoLine key={item.id}>
          <TodoInfo>
            <Complete
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <TodoDetails>
              <TodoText>{item.text}</TodoText>
              <TimeText>{item.postedTime}</TimeText>
            </TodoDetails>
          </TodoInfo>
          <Delete onClick={() => onDeleteTodo(item.id)}>
            {" "}
            <img
              src="https://i.ibb.co/nRT1NwB/Untitled-design-20.png"
              alt="Delete todo button"
              width="35px"
              height="35px"
            />
          </Delete>
        </TodoLine>
      ))}
    </TodoCard>
  );
};

export default TodoList;
