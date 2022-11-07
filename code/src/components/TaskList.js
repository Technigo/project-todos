import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import tasks from 'reducers/tasks';
import NewTask from './NewTask';

const TaskHeadline = styled.h1`
font-family: 'Merriweather';
font-size: 45px;
color: #39739d;
`

const TaskH2 = styled.h2`
font-family: 'Merriweather';
font-size: 25px;
color: #39739d;
`

const SingleTaskHeading = styled.h3`
font-family: 'Merriweather';
font-size: 28px;
margin-top: 5%;
text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
color: ${(props) => (props.done ? '#D3D3D3' : '#39739d')};
`

const SingleTaskContainer = styled.div`
border: 0.4px solid gray;
background: #f8f8f8;
border-radius: 15px;
padding: 1rem;
margin: 0px auto;
margin-top: 2rem;
width: 20rem;
position: relative;
word-break: break-word;
display: grid;
opacity: ${(props) => (props.done ? '0.5' : 'none')};
`

const LabelForCheckbox = styled.label`
font-family: 'Merriweather';
font-size: 17px;
color: #39739d;
`

const TaskContainer = styled.div`
width: 375px;
margin: 0px auto;
margin-top: 5%;
margin-bottom: 10%;
display: flex;
flex-direction: column;
align-items: center;
border: 8px solid;
border-image: linear-gradient(45deg, #B1C2DD, #E3E3E3, #DDF2FD, #B1C2DD) 1;
padding: 4% 10%;
`

const DeleteBtn = styled.button`
border-radius: 50%;
width: 30px;
height: 30px;
border: 2px solid pink;
font-size: 10px;
position: absolute;
right: 4%;
top: 7%;
`

const TaskListContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
`

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();
  const onTaskIsDoneToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  }

  const deleteTaskBtnClick = (taskIndex) => {
    dispatch(tasks.actions.deleteItem(taskIndex))
  }

  return (
    <section>
      <TaskContainer>
        <TaskHeadline>To-do list</TaskHeadline>
        <TaskH2>Add today&apos;s tasks below.</TaskH2>
        <NewTask />
        <TaskListContainer>
          {taskList.map((singleTask) => {
            return (
              <SingleTaskContainer done={singleTask.isDone}>
                <SingleTaskHeading done={singleTask.isDone}>{singleTask.name}</SingleTaskHeading>
                <DeleteBtn onClick={deleteTaskBtnClick} type="button">
                  X
                </DeleteBtn>
                <LabelForCheckbox>Is this task done?
                  <input type="checkbox" checked={singleTask.isDone} onChange={() => onTaskIsDoneToggle(singleTask.id)} />
                </LabelForCheckbox>
              </SingleTaskContainer>
            )
          })}
        </TaskListContainer>
      </TaskContainer>
    </section>
  )
}

export default TaskList;