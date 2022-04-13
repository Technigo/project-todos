import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { projects } from "reducers/projects";
import { useNavigate } from "react-router-dom";
import { keyframes } from "styled-components";
import uniqid from "uniqid";

// Import Components
import Error from "./Error";
import NoTasks from "./NoTasks";
import Task from "./Task";

// Import Styled Elements
import { TextInput } from "styledelements/elements";

// Import Icons
import { addwhite } from "../assets/icons";

const Project = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const id = useParams().id;
  const projectArray = useSelector((store) => store.projects.project);
  const iconArray = useSelector((store) => store.icons.icons);
  const project = projectArray.find((x) => x.id === id);
  const projectIndex = projectArray.findIndex((project) => project.id === id);
  const taskList = useSelector(
    (store) => store.projects.project[projectIndex].tasks
  );

  // Create unique ID
  let taskId = uniqid("task-");

  const addTask = () => {
    dispatch(
      projects.actions.addTask({
        taskid: taskId,
        title: taskName,
        complete: false,
        added: Date.now(),
        projectid: project.id,
        projectindex: projectIndex,
      })
    );
    setTaskName("");
  };

  const toggleAllTasksComplete = () => {
    dispatch(
      projects.actions.toggleAllTasksComplete({
        projectindex: projectIndex,
      })
    );
  };

  const deleteProject = () => {
    dispatch(
      projects.actions.deleteProject({
        projectindex: projectIndex,
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
              src={iconArray[Number(project.icon)][3]}
              alt={iconArray[2]}
              height="40px"
              width="40px"
            />
            <h1>{project.title}</h1>
          </IconTitleContainer>
          <div>
            <h2>
              {taskList.filter((task) => task.complete === true).length} /{" "}
              {taskList.length}
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
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
              width="100%"
              className="newTaskInput"
              onKeyDown={(e) => e.key === "Enter" && addTask()}
            />
          </NewTask>
          {taskList.length === 0 && <NoTasks />}
          {taskList.length > 0 &&
            taskList.map((task) => (
              <Task
                key={task.taskid}
                taskid={task.taskid}
                projectindex={projectIndex}
              />
            ))}
        </TaskContainer>
        <ProjectFooter backgroundcolor={project.color}>
          {taskList.length > 0 && (
            <FooterButton
              role="button"
              tabIndex="0"
              onClick={toggleAllTasksComplete}
              onKeyDown={(e) => e.key === "Enter" && toggleAllTasksComplete()}
            >
              Mark all tasks as complete
            </FooterButton>
          )}
          {/* {taskArray.length > 0 && allComplete && (
            <button onClick={toggleAllTasksIncomplete}>
              Mark all tasks as incomplete
            </button>
          )} */}
          <FooterButton
            role="button"
            tabIndex="0"
            onClick={deleteProject}
            onKeyDown={(e) => e.key === "Enter" && deleteProject()}
          >
            Delete project to-do list
          </FooterButton>
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
  transition: all 0.7s ease-out;

  &:hover {
    transition: all 0.5s ease-in;
    transform: scale(1.1);
  }
`;

const NewTaskIcon = styled.img`
  height: 20px;
  width: 20px;
`;

const unfold = keyframes`
0% { max-height: 0; }
100% { max-height: 2000; }
`;

const TaskContainer = styled.div`
  padding: 10px;
  border-left: 3px solid ${(props) => props.bordercolor};
  border-right: 3px solid ${(props) => props.bordercolor};
  overflow: hidden;
  animation: ${unfold} 4s ease-out;
  animation-fill-mode: forwards;
  // height: auto;
  max-height: 2000px;
  background-color: white;
`;

const FooterButton = styled.div`
  background-color: #dee2e6;
  color: #212529;
  border: none;
  cursor: pointer;
  padding: 7px;
  font-weight: 400;
  align-self: stretch;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const ProjectFooter = styled.div`
  background-color: ${(props) => props.backgroundcolor};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: white;
  padding: 8px 10px;
  gap: 10px;
  margin-bottom: 20px;
`;
