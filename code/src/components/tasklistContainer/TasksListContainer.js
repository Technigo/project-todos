import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

//imported components
import DeleteButton from "./DeleteButton";
import CheckboxInput from "./CheckboxInput";
import TaskList from "./TaskList";

//importing reducer required for sending info via dispatch
import todos from "../../reducers/todos";

//Stlyed component
const Section = styled.section`
  display: flex;
`;

const Form = styled.form`
  padding: 5px 15px;
  background-color: rgb(147, 181, 198);
  display: flex;
  align-items: center;
  margin-top: 4px;
  padding: 5px;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  padding: 5px;
  padding: 5px 15px;
  color: #b35900;
  background-color: rgb(201, 204, 213);
`;

const TasksListContainer = () => {
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

          <TaskList itemId={item.id} itemTask={item.task} />

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
export default TasksListContainer;
