/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// src/components/TaskList.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { toggleComplete, removeTask } from '../reducers/tasks'

const TaskListContainer = styled.div`
  margin-top: 1em;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5em;
  font-size: 1.2em;
  color: white;
`;
const colors = ['#7ab9d7', ' #b8b9c7', ' #4b4a70'];
const ProjectContainer = styled.div`
 background-color: ${(props) => props.color};
  padding: 1em;
  margin-bottom: 1em;
  margin-bottom: 2%;
  min-height:200px
`;

const TaskListUl = styled.ul`
  list-style: none;
  padding: 0;
  color:white;
  display:flex;
  align-items:center
`;

const TaskItem = styled.li`
  padding: 0.5em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color:  #b8b9c7;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks)
  const projects = useSelector((state) => state.projects)
  const dispatch = useDispatch()

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id))
  }

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id))
  }

  const formatDate = (dateString, dueDate) => {
    const date = new Date(dateString);
    let formattedDate = date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

    if (dueDate) {
      const due = new Date(dueDate);
      formattedDate = ` due ${due.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`;
    }

    return formattedDate;
  };

  return (
    <TaskListContainer>
      <h1> Projects </h1>

      <Carousel
        showArrows
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        emulateTouch
      >        {projects.map((project) => (
          <ProjectContainer key={project.id} color={colors[project.id % colors.length]}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <TaskListUl>
              {tasks
                .filter((task) => task.projectId === project.id)
                .map((task) => (
                  <TaskItem
                    key={task.id}
                    completed={task.complete}
                    onClick={() => handleToggleComplete(task.id)}>
                    {task.text}{' '}
                    <span>{formatDate(task.createdAt, task.dueDate)}</span>
                    <DeleteButton type="button" onClick={(e) => { e.stopPropagation(); handleRemoveTask(task.id); }}>
                    Delete
                    </DeleteButton>
                  </TaskItem>
                ))}
            </TaskListUl>
          </ProjectContainer>
        ))}
      </Carousel>
    </TaskListContainer>
  )
}

export default TaskList
