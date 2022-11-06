import React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { TaskReducer, IdeaReducer } from 'reducers/reducers';
import { ClearScreenTask, ClearScreenIdea } from 'components/ClearScreen'
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
          <Text>What do you need to do?</Text>
          {taskList.map((singleTask) => {
            return (
              <Todo>
                <input
                  id={singleTask.id}
                  type="checkbox"
                  checked={singleTask.isCaught}
                  onChange={() => onTaskIsDoneToggle(singleTask.id)} />
                <label htmlFor={singleTask.id}>{singleTask.text}</label>
                <button type="button" onClick={() => onDeleteTask(singleTask.id)}>
                  <DeleteIcon
                    src="/images/trash_empty.png"
                    alt="Icon" />
                </button>
              </Todo>
            )
          })}
          <TaskCounter />
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
          <Text>What do you want to do?</Text>
          {ideaList.map((singleIdea) => {
            return (
              <Todo>
                <input
                  id={singleIdea.id}
                  type="checkbox"
                  checked={singleIdea.isCaught}
                  onChange={() => onIdeaIsDoneToggle(singleIdea.id)} />
                <label htmlFor={singleIdea.id}>{singleIdea.text}</label>
                <button type="button" onClick={() => onDeleteIdea(singleIdea.id)}>
                  <DeleteIcon
                    src="/images/trash_empty.png"
                    alt="Icon" />
                </button>
              </Todo>
            )
          })}
          <IdeaCounter />
        </Container>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin-top: 50px;
width: 90%;
`

const Container = styled.section`
box-sizing: border-box;
background-color: #303030;
width: 100%;
padding: 10px;
border-radius: 10px;
`
const Text = styled.h2`
color: #ff999b;
`

const DeleteIcon = styled.img`
height: 30px;
`

const Todo = styled.div`
display: flex;
background-color: #424242;
width: 100%;
padding-left: 5px;
margin-bottom: 10px;
border-radius: 10px;
justify-content: space-between;
align-items: center;

[type="button"] {
margin: 10px;
padding: 0;
height: 40px;
width: 40px;
border-radius: 50%;
background-image:url(/images/empty_trash.png);
background-size:contain;
background-position: center;
background-color: #303030;
border: none
}

// Everything below is checkbox-styling

[type="checkbox"] {
  display: none;
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
  width: 28px;
  height: 28px;
  outline: 1px solid #ff7ab8;
  background: #303030;
}
[type="checkbox"]:checked + label::before{
  content:"";
  position:absolute;
  left:0;
  top:0;
  width: 28px;
  height: 28px;
  outline: 2px solid #ff7ab8;
  background: #303030;
}
[type="checkbox"]:checked + label::after{
  content:"";
  position:absolute;
  left:0;
  top:0;
  width: 28px;
  height: 28px;
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
  width: 28px;
  height: 28px;
  background-image:url(/images/check.png);
  background-size:contain;
  transform:scale(0);
  opacity:0;
}
`