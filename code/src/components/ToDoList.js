/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import moment from 'moment'
// import { format } from 'date-fns';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/toDos';
// import { Checkbox } from 'styles/Checkbox'

const ToDoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('toDoListSave'))
    if (listFromStorage) {
      dispatch(toDos.actions.setAllItems(listFromStorage))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const toDoList = useSelector((store) => store.toDos.items);
  const onCompleteToggle = (id) => {
    dispatch(toDos.actions.toggleItem(id));
  }
  useEffect(() => {
    localStorage.setItem('toDoListSave', JSON.stringify(toDoList))
  }, [toDoList])
  return (
    <section>
      {toDoList.map((singleToDo) => {
        return (

          <article>
            <div className="checkbox-wrapper">

              <input type="checkbox" checked={singleToDo.complete} onChange={() => onCompleteToggle(singleToDo.id)} />
              <label className="strikethrough"> {singleToDo.name}

              </label>
              <button type="button" className="deleted-btn" onClick={() => dispatch(toDos.actions.removeItem(singleToDo.id))}>  <RemoveButton
                src="./assets/waste-icon.png"
                alt="remove task" />
              </button>
              <p className="moment">
                {moment().startOf('day').fromNow()}
              </p>
              {/* <p className="day">
                {format(toDos.createdAt, 'dd/mm/yyyy')}
                {format(new Date(toDos.time), 'p, MM/dd/yyyy')}
              </p> */}
            </div>
          </article>
        );
      })}
    </section>
  )
}

export default ToDoList;

const RemoveButton = styled.img`
width: 15px;
    height: 15px;
  &:hover {
    animation: jelly .5s ease;
  }
  @keyframes jelly {
  from {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1.25, 0.75);
  }
  40% {
    transform: scale(0.75, 1.25);
  }
  to {
    transform: scale(1, 1);
  }
  }
`

// const MainSection = styled.section`

//   background-color: blue;
// 	div{}
// `