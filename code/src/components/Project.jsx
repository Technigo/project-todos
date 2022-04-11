import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { tasks } from "reducers/tasks";
import { projects } from "reducers/projects";
import { useNavigate } from "react-router-dom";

// Import Components
import Error from "./Error";
import NoTasks from "./NoTasks";
import Task from "./Task";

// Import Styled Elements
import { TextInput } from "styledelements/elements";

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
  addwhite,
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
          <IconTitleContainer>
            <Icon
              src={iconArray[Number(project.icon)][1]}
              alt={iconArray[2]}
              height="40px"
              width="40px"
            />
            <h1>{project.title}</h1>
          </IconTitleContainer>
          <div>
            <h2>
              {
                taskArray.filter(
                  (task) =>
                    project.id === task.projectid && task.complete === true
                ).length
              }{" "}
              /{" "}
              {taskArray.filter((task) => project.id === task.projectid).length}
            </h2>
          </div>
        </ProjectHeader>
        <TaskContainer bordercolor={project.color}>
          <NewTask>
            <NewTaskIconWrapper role="button" onClick={addTask}>
              <NewTaskIcon src={addwhite} alt="add new task." />
            </NewTaskIconWrapper>
            <TextInput
              type="text"
              onChange={(event) => setTaskName(event.target.value)}
              width="100%"
              className="newTaskInput"
            />
          </NewTask>
          {taskArray.length === 0 && <NoTasks />}
          {taskArray.length > 0 &&
            taskArray.map((task) => (
              <Task key={task.taskid} taskid={task.taskid} />
            ))}
        </TaskContainer>
        <ProjectFooter backgroundcolor={project.color}>
          {taskArray.length > 0 && (
            <button onClick={toggleAllTasks}>Mark all tasks as complete</button>
          )}
          <button onClick={deleteProject}>Delete project to-do list</button>
        </ProjectFooter>
      </>
    );
  } else {
    return <Error />;
  }
};

export default Project;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.backgroundcolor};
  color: white;
  padding: 8px 10px;
  hyphens: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }
`;

const IconTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const NewTask = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  gap: 10px;
`;

const NewTaskIconWrapper = styled.div`
  border-radius: 50%;
  background-color: #212429;
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.1);
    // border: 2px solid white;
  }
`;

const NewTaskIcon = styled.img`
  height: 20px;
  width: 20px;
`;

const TaskContainer = styled.div`
  padding: 10px;
  border-left: 3px solid ${(props) => props.bordercolor};
  border-right: 3px solid ${(props) => props.bordercolor};
`;

const ProjectFooter = styled.div`
  background-color: ${(props) => props.backgroundcolor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 8px 10px;
  gap: 10px;
  margin-bottom: 20px;
`;
