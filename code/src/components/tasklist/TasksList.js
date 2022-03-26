import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
//imported components
import DeleteButton from "./DeleteButton";
import CheckboxInput from "./CheckboxInput";
//importing reducer required for sending info via dispatch
import todos from "../../reducers/todos";

//Stlyed component
const Section = styled.section`
  display: flex;
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);
  @media (min-width: 500px) {
    font-size: 1rem;
  }
`;

const Form = styled.form`
  padding: 5px 15px;
  background-color: rgb(147, 181, 198);
  display: flex;
  align-items: center;
  margin-top: 4px;
  padding: 5px;
`;

const ListWrapper = styled.ul`
  min-width: 90px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;
  padding: 5px;
  list-style-type: none;
  background-color: rgb(201, 204, 213);
  color: rgb(0, 30, 108);
  flex-grow: 1;
    padding: 10px 5px;

`;

const DateContainer = styled.div`
  min-width: 90px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  padding: 5px;
  padding: 5px 15px;
  color: #b35900;
  font-style: italic;
  background-color: rgb(147, 181, 198);

  @media (min-width: 400px) {
    min-width: 120px;
  }
`;

const CategoryContainer = styled.div`
  min-width: 90px;
  max-width: 90px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  padding: 5px;
  padding: 5px 15px;
  color: white;
  font-style: italic;
  font-weight: bolder;
  background-color: #1499da;
  @media (min-width: 400px) {
    min-width: 108px;
  }
`;

const TasksList = () => {
  // This component is responsible for getting from the store and rendering the tasks.
  const tasks = useSelector((store) => store.todos.tasks);
  const dispatch = useDispatch(); // sends info to the reducers

  //Function declaration for ticking checkbox (onChange)
  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  //Function declaration for deleting task (onClick)
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <>
      {tasks.map((item) => (
        <Section key={item.id}>

          <CategoryContainer>
            <p>{item.category}</p>
          </CategoryContainer>

          <ListWrapper>
            <li>{item.task}</li>
          </ListWrapper>

          <DateContainer>
            <p>{item.createdAt}</p>
          </DateContainer>

          <Form>
            <CheckboxInput
              onToggleTask={onToggleTodo}
              itemId={item.id}
              isComplete={item.isComplete}
            />

            <DeleteButton onDeleteTask={onDeleteTodo} itemId={item.id} />
          </Form>

        </Section>
      ))}
    </>
  );
};
export default TasksList;
