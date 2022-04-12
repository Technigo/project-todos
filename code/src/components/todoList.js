import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import pokemons from "reducers/todo";

const TaskItem = styled.article`
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

// useSelector  reach for the data.
// to reach the whole store or backpack: ((store) => store...

const TaskList = () => {
  const taskList = useSelector((backpack) => backpack.pokemons.items);

  const dispatch = useDispatch();

  const onPokemonToggle = (pokemonId) => {
    dispatch(pokemons.actions.toggleItem(pokemonId));
  };

  return (
    <section>
      {taskList.map((taskItem) => (
        <TaskItem key={taskItem.id}>
          <h2>{taskItem.text}</h2>
          <label>
            Is completed:
            <input
              type="checkbox"
              checked={taskItem.completed}
              onChange={() => onPokemonToggle(taskItem.id)}
            />
          </label>
          <DeleteButton>
            <span role="img" aria-label="delete">
              ❌
            </span>
          </DeleteButton>
        </TaskItem>
      ))}
    </section>
  );
};

export default TaskList;
