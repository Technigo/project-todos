import React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { TaskReducer, IdeaReducer } from 'reducers/reducers';
import { ClearScreenTask, ClearScreenIdea } from 'components/ClearScreen'
// import deleteIcon from '../images/delete.png';
import { TaskCounter, IdeaCounter } from './Counters';

export const TaskList = () => {
  const taskList = useSelector((store) => store.TaskReducer.items);
  const dispatch = useDispatch();

  const onTaskIsDoneToggle = (id) => {
    dispatch(TaskReducer.actions.toggleTask(id))
  }

  const onDeleteTask = (id) => {
    dispatch(TaskReducer.actions.deleteTask(id))
  }

  return (
    <Wrapper>
      {(taskList.length === 0) ? (
        <ClearScreenTask />
      ) : (
        <Container>
          <TaskCounter />
          {taskList.map((singleTask) => {
            return (
              <article>
                <input
                  id={Date.now()}
                  type="checkbox"
                  checked={singleTask.isCaught}
                  onChange={() => onTaskIsDoneToggle(singleTask.id)} />
                <label htmlFor={Date.now()}>{singleTask.text}</label>
                <button type="button" onClick={() => onDeleteTask(singleTask.id)}>X</button>
              </article>
            )
          })}
        </Container>
      )}
    </Wrapper>
  )
}

export const IdeaList = () => {
  const ideaList = useSelector((store) => store.IdeaReducer.items);
  const dispatch = useDispatch();

  const onIdeaIsDoneToggle = (id) => {
    dispatch(IdeaReducer.actions.toggleIdea(id))
  }

  const onDeleteIdea = (id) => {
    dispatch(IdeaReducer.actions.deleteIdea(id))
  }

  return (
    <Wrapper>
      {(ideaList.length === 0) ? (
        <ClearScreenIdea />
      ) : (
        <Container>
          <IdeaCounter />
          {ideaList.map((singleIdea) => {
            return (
              <Todo>
                <input
                  id={singleIdea.text}
                  type="checkbox"
                  checked={singleIdea.isCaught}
                  onChange={() => onIdeaIsDoneToggle(singleIdea.id)} />
                <label htmlFor={singleIdea.text}>{singleIdea.text}</label>
                <button type="button" onClick={() => onDeleteIdea(singleIdea.id)}>-</button>
              </Todo>
            )
          })}
        </Container>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
`

const Container = styled.section`
box-sizing: border-box;
background-color: #303030;
width: 100%;
padding: 10px;
border-radius: 10px;
`
const Todo = styled.div`

.img {
  height: 40px;
}

[type="checkbox"] {
  opacity:0;
}
[type="checkbox"] + label{
  position:relative;
  padding-left:30px;
  cursor:pointer;
  display:inline-block;
  color:#ff7ab8;
  line-height: 25px;
}
[type="checkbox"] + label::before{
  content:"";
  position:absolute;
  left:0;
  top:0;
  width: 18px;
  height: 18px;
  outline: 2px solid gray;
  background: #303030;
}
[type="checkbox"]:checked + label::before{
  content:"";
  position:absolute;
  left:0;
  top:0;
  width: 18px;
  height: 18px;
  outline: 2px solid #ff7ab8;
  background: #303030;
}
[type="checkbox"]:checked + label::after{
  content:"";
  position:absolute;
  left:0;
  top:0;
  width: 18px;
  height: 18px;
  background-image:url(/images/check.png);
  background-size:contain;
  transform:scale(1.7);
  opacity:1;
  transition: all .4s ease;
}
[type="checkbox"]:not(:checked) + label::after{
  content:"";
  position:absolute;
  left:0;
  top:0;
  width: 18px;
  height: 18px;
  background-image:url(/images/check.png);
  background-size:contain;
  transform:scale(0);
  opacity:0;
}

[type="button"] {
margin: 10px;
background-image:url(/images/check.png);
border: none
}

`