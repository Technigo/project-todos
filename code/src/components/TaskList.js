import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todolist from 'reducers/todolist';
import styled from 'styled-components';
import DeleteTask from './DeleteTask';

const SingleTaskDiv = styled.div`
width: 400px;
margin: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 10px;`

const TaskList = ({ inputValue }) => {
  const dispatch = useDispatch();
  const todoList = useSelector((store) => store.todolist.items);

  const handleOnChange = (id) => {
    dispatch(todolist.actions.toggleTask(id));
  };

  return (
    <section>
      {todoList.map((singletask) => {
        return (
          <SingleTaskDiv key={singletask.id}>
            <div>
              <input
                type="checkbox"
                id={singletask.id}
                value={inputValue}
                checked={singletask.isChecked}
                onChange={() => handleOnChange(singletask.id)} />
              {singletask.name}<br />
              {singletask.time}
            </div>
            <div>
              <DeleteTask singletask={singletask} />
            </div>
          </SingleTaskDiv>
        )
      })}
    </section>
  )
}

export default TaskList;