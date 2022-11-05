import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro'
import tasks from 'reducers/tasks';
import trashbin from 'images/trashbin-icon.svg'

const TaskList = () => {
  const taskList = useSelector((backpack) => backpack.tasks.items);

  const dispatch = useDispatch();

  const onIsCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  };

  const onDeleteTask = (id) => {
    dispatch(tasks.actions.deleteTask(id));
  };

  return (
    <ListWrapper>
      {taskList.map((singleTask) => {
        return (
          <TaskWrapper key={singleTask.id}>
            <div className={singleTask.isComplete === true ? 'finished' : 'notFinished'}>
              <ElementWrapper>
                <input
                  type="checkbox"
                  checked={singleTask
                    .isComplete}
                  onChange={() => onIsCompleteToggle(singleTask.id)} />
                <StyledTask>{singleTask.text}</StyledTask>
              </ElementWrapper>

              <ElementWrapper>
                <p>{singleTask.postedTime}</p>
                <button
                  type="button"
                  onClick={() => onDeleteTask(singleTask.id)}>
                  <TrashbinIcon
                    className="trashbin-icon"
                    src={trashbin}
                    alt="Trashbin icon" />
                </button>
              </ElementWrapper>
            </div>
            <hr
              style={{
                border: '0.5px solid var(--color-accent)'
              }} />
          </TaskWrapper>
        );
      })}
    </ListWrapper>
  )
}

const ListWrapper = styled.section`
  margin: 3vh 0;
`

const TaskWrapper = styled.article`
  // outline: 1px solid red;

  .finished, .notFinished {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .finished {
        opacity: 0.5;
        text-decoration: line-through;
        text-decoration-color: var(--color-accent)
        }
  
  button {
    background-color: var(--color-background);
    border: none;
    cursor: pointer;
    }
`
const ElementWrapper = styled.div`
  // outline: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2vh 0;

/*   [type="checkbox"]{
    opacity: 0;
  }

  [type="checkbox"] + label{
    position: relative;
    // padding-left: 0;
    cursor: pointer;
    display: inline-block;
    color: #666;
  }

  [type="checkbox"] + label::before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    height: 15px;
    outline: 2px solid var(--color-accent);
    background: var(--color-white);
  }

  [type="checkbox"]:checked + label::before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    height: 15px;
    outline: 2px solid red;
    background: var(--color-white);
  }

  [type="checkbox"]:checked + label::after{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    height: 15px;
    background: var(--color-white);
  } */

  p {
    font-family: var(--font-main);
    font-weight: 400;
    text-align: right;
    font-size: 12px;
    color: var(--color-lighterAccent);
    padding: 0 15px;
  }
`

const StyledTask = styled.h3`
  font-family: var(--font-main);
  font-weight: 600;
  text-align: left;
  font-size: 18px;
  color: var(--color-accent);
  padding: 0 15px;
`
const TrashbinIcon = styled.img`
    width: 15px;
`

export default TaskList;
