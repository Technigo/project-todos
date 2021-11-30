import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Todo } from "./Todo";
import { NewTodo } from "./AddTodo";
import { todos } from "../reducers/Todos";
import { TodosContainer, DeleteButton, TopInfo, AddTodoButton } from "./StyledComponents";

const Todolist = ({ toDone, notDone, allTodos }) => {
  const listedtodos = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();
  const toDoneTodos = listedtodos.filter((todo) => todo.complete === true);
  const notDoneTodos = listedtodos.filter((todo) => todo.complete === false);
  const [addTodo, setAddTodo] = useState(false);

  const showInput = () => {
    setAddTodo(!addTodo);
  };

  return (
    <TodosContainer>
      <TopInfo>
        ToDone: {toDoneTodos.length}/{listedtodos.length}
        <DeleteButton onClick={() => dispatch(todos.actions.clearTodos())}>Delete All</DeleteButton>
      </TopInfo>
      <NewTodo addTodo={addTodo} setAddTodo={setAddTodo} />

      {allTodos &&
        listedtodos.map((todo) => {
          return <Todo text={todo.text} key={todo.id} complete={todo.complete} todo={todo} />;
        })}

      {toDone &&
        toDoneTodos.map((todo) => {
          return <Todo text={todo.text} key={todo.id} complete={todo.complete} todo={todo} />;
        })}

      {notDone &&
        notDoneTodos.map((todo) => {
          return <Todo text={todo.text} key={todo.id} complete={todo.complete} todo={todo} />;
        })}

      <AddTodoButton type="submit" onClick={showInput}>
        {addTodo ? "-" : "+"}
      </AddTodoButton>
    </TodosContainer>
  );
};

export default Todolist;
