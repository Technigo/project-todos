/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
/* import styled from 'styled-components/macro' */
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import styled from 'styled-components/macro';
import emptystate from 'assets/space.png'

const ToDoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('toDoListSave'))
    if (listFromStorage) {
      dispatch(todos.actions.setAllItems(listFromStorage))
    }
  }, [])

  const toDoList = useSelector((store) => store.todos.items);

  const onToggleToDo = (id) => {
    dispatch(todos.actions.toggleToDo(id));
  }

  const onDeleteToDo = (id) => {
    dispatch(todos.actions.deleteToDo(id));
  }

  useEffect(() => {
    localStorage.setItem('toDoListSave', JSON.stringify(toDoList))
  }, [toDoList])

  return (
    <StyledList
      className={toDoList.length <= 0 ? 'no-items' : 'display-items'}>
      {toDoList.map((singleToDo) => {
        return (
          <article key={singleToDo.id}>
            <input
              type="checkbox"
              checked={singleToDo.isComplete}
              onChange={() => onToggleToDo(singleToDo.id)} />
            <label className="strikethrough">{singleToDo.text}</label>
            <p>Created: {singleToDo.postedTime}</p>
            <button type="button" onClick={() => onDeleteToDo(singleToDo.id)}>X</button>
          </article>

        );
      })}
    </StyledList>
  )
}

export default ToDoList

const StyledList = styled.section`
  &.display-items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px auto;
    height: 260px;
    overflow-y: scroll;
  }
  &.no-items {
    background-image: url(${emptystate});
    height: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

`
