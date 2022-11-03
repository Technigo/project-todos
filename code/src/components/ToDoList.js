/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/toDos';
// import { Checkbox } from 'styles/Checkbox.styled'

const ToDoList = () => {
  const toDoList = useSelector((store) => store.toDos.items);

  const dispatch = useDispatch();
  const onCompleteToggle = (id) => {
    dispatch(toDos.actions.toggleItem(id));
  }

  return (
    <section>
      {toDoList.map((singleToDo) => {
        return (

          <article>
            <div className="checkbox-wrapper">

              <label>

                <input type="checkbox" checked={singleToDo.complete} onChange={() => onCompleteToggle(singleToDo.id)} />
                {singleToDo.name}

              </label>

              <button type="button" className="deleted-btn" onClick={() => dispatch(toDos.actions.removeItem(singleToDo.id))}>  <RemoveButton
                src="./images/waste-icon.png"
                alt="remove task" />
              </button>
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