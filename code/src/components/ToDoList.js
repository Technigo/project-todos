/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import todos from 'reducers/todos';

import emptystate from 'assets/space.png'
import minus from 'assets/minus.png'
import { DeleteBtn } from './StyledBtnInput';

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
            <div className="container">
              <DeleteBtn type="button" onClick={() => onDeleteToDo(singleToDo.id)}>
                <img className="btn-icon" aria-label="icon" src={minus} />
              </DeleteBtn>
              <p>{singleToDo.postedTime}</p>
            </div>
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
    height: 400px;
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

  article {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.5vh 2vw;
    min-height: 12vh;
    justify-content: space-between;
    overflow: scroll;
    border-radius: 1%;
    border: 1px solid rgb(176, 228, 232);
  } 
    article:nth-child(2n + 1) {
      background: linear-gradient(90deg, #72aad0, #95bac2, #a3bfc3);
  }
  label.strikethrough {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 25px;
    word-break: break-word;
    word-wrap: break-word;
    max-width: 200px;
    
    @media (min-width: 450px) {
      max-width: 50vw;
    }
  }
  p {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 12px;
    word-wrap: break-word;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
