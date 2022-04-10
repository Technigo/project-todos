import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { tasks } from "reducers/tasks";
import { projects } from "reducers/projects";
import { useNavigate } from "react-router-dom";

// Import Components
import Error from "./Error";
import NoTasks from "./NoTasks";
import Task from "./Task";

// Import Styled Elements
import { Icon, TextInput } from "styledelements/elements";

// Import Icons'
import {
  chatwhite,
  clipboardwhite,
  gamewhite,
  giftwhite,
  outdoorswhite,
  pinwhite,
  shoppingwhite,
  timewhite,
  travelwhite,
  tvwhite,
  viewwhite,
  weatherwhite,
} from "../assets/icons";

const iconArray = [
  [0, chatwhite, "chat"],
  [1, clipboardwhite, "clipboard"],
  [2, gamewhite, "game"],
  [3, giftwhite, "gift"],
  [4, outdoorswhite, "outdoors"],
  [5, pinwhite, "pin"],
  [6, shoppingwhite, "shopping"],
  [7, timewhite, "time"],
  [8, travelwhite, "travel"],
  [9, tvwhite, "tv"],
  [10, viewwhite, "view"],
  [11, weatherwhite, "weather"],
];

const Project = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const id = useParams().id;
  const projectArray = useSelector((store) => store.projects.project);
  const taskArray = useSelector((store) => store.tasks.task).filter(
    (task) => task.projectid === id
  );
  const project = projectArray.find((x) => x.id === id);

  const addTask = () => {
    dispatch(
      tasks.actions.addTask({
        taskid:
          Date.now().toString(36) + Math.random().toString(36).substring(2),
        title: taskName,
        complete: false,
        added: Date.now(),
        projectid: project.id,
      })
    );
    document.querySelector(".newTaskInput").value = "";
  };

  const toggleAllTasks = () => {
    dispatch(
      tasks.actions.toggleAllTasks({
        projectid: project.id,
      })
    );
  };

  const deleteProject = () => {
    // Delete All Tasks
    dispatch(
      tasks.actions.deleteProjectTasks({
        projectid: project.id,
      })
    );
    // Delete Project
    dispatch(
      projects.actions.deleteProject({
        projectid: project.id,
      })
    );
    navigate("/");
    setTimeout(window.location.reload(), 5);
  };

  if (project) {
    return (
      <>
        <ProjectHeader backgroundcolor={project.color}>
          <Icon
            src={iconArray[Number(project.icon)][1]}
            alt={iconArray[2]}
            height="40px"
            width="40px"
          />
          <h1>{project.title}</h1>
        </ProjectHeader>
        {taskArray.length === 0 && <NoTasks />}
        <div>
          <h3>Name task:</h3>
        </div>
        <TextInput
          type="text"
          onChange={(event) => setTaskName(event.target.value)}
          width="100%"
          className="newTaskInput"
        />
        <button onClick={addTask}>Add task!</button>
        {taskArray.length > 0 &&
          taskArray.map((task) => (
            <Task key={task.taskid} taskid={task.taskid} />
          ))}
        {taskArray.length > 0 && (
          <button onClick={toggleAllTasks}>Mark all tasks as complete</button>
        )}
        <button onClick={deleteProject}>Delete project to-do list</button>
      </>
    );
  } else {
    return <Error />;
  }
};

export default Project;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${(props) => props.backgroundcolor};
  color: white;
  padding: 8px 10px;
  word-break: break-all;
`;
