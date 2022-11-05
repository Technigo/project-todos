/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { FaEraser } from 'react-icons/fa';
import AddTask from './AddTask';
import TaskCount from './TaskCounter';

/* my "main" component where it all happens
and a input when you press is todo completed
and a button for deleting the todo all togheter
where mapping (looping) through our tasks (store) */

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onTaskCompleted = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  }
  const onTaskDelete = (index) => {
    dispatch(tasks.actions.deleteTask(index));
  }

  return (
    <SectionParent>
      <SectionWrapper>
        <TaskSection>
          {taskList.map((singelTask, index) => {
            return (
              <PostIT key={singelTask.id}>
                <PostItList>
                  <PostItTitle>{singelTask.text}</PostItTitle>
                  <PostItText className={`${singelTask.complete ? 'complete' : ''}`}>
                    <input
                      type="checkbox"
                      checked={singelTask.complete}
                      onChange={() => onTaskCompleted(singelTask.id)} />
                     is task completed
                  </PostItText>
                  <div>
                    <DeleteButton onClick={() => onTaskDelete(index)} type="button">Erase me... <ClonedEraser /></DeleteButton>
                  </div>
                </PostItList>
              </PostIT>
            );
          })}
        </TaskSection>
        <TaskParent>
          <TaskCount />
          <AddTask />
        </TaskParent>
      </SectionWrapper>
    </SectionParent>
  )
}

/* styled components */

const SectionParent = styled.section`
  display: flex;
  width: 100%;
`;

const SectionWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TaskParent = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;

  @media (max-width: 550px) {
  display: flex;
  flex-direction: column;
  }
`;

const PostIT = styled.ul`
  list-style:none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin:1em;
`;

const PostItList = styled.li`
  list-style:none;
  text-decoration:none;
  color:#000;
  background:#ffc;
  display:block;
  height:13em;
  width:13em;
  padding:1em;
  margin:1em;
  box-shadow: 7px 7px 9px rgba(33,33,33,.7);
  transform: rotate(-6deg);
  transition: transform .15s linear;

  &:hover {
    box-shadow:10px 10px 7px rgba(0,0,0,.7);
    transform: scale(1.15);
    position:relative;
    z-index:5;    
  }

  @media (min-width: 900px) {
    height:20em;
    width:20em;
    width: ;
  }
  
`;

const PostItTitle = styled.h2`
font-weight: bold;
font-size: 1.5rem;
font-family: 'Reenie Beanie';

@media (min-width: 900px) {
  font-size: 2.5rem;
}
`;

const PostItText = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: normal;
  font-family: 'Reenie Beanie';

  &:focus {
    text-decoration: line-through;
  }

  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

const DeleteButton = styled.button`
border: none;
background-color: transparent;
cursor: pointer;
margin-left: auto;
font-size: 1rem;
color: var(--primary);
font-weight: bold;
font-size: 2rem;
font-family: 'Reenie Beanie';


 &:hover {
opacity: 75%;
transition: 0.3s ease;
}
`;

const ClonedEraser = styled(FaEraser)`
  font-size: 1em;

  @media (min-width: 900px) {
    font-size: 1.5rem;
  }

`;

export default TaskList

// onChange={() => onTaskCompleted(singleTask.id) } ****use this?