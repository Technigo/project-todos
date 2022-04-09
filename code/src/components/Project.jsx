import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { tasks } from "reducers/tasks";

// Import Components
import Error from "./Error";
import NoTasks from "./NoTasks";
import Task from "./Task";

// Import Styled Elements
import { Icon, TextInput } from "styledelements/elements";

// Import Icons'
import {
  chatgray,
  clipboardgray,
  gamegray,
  giftgray,
  outdoorsgray,
  pingray,
  shoppinggray,
  timegray,
  travelgray,
  tvgray,
  viewgray,
  weathergray,
} from "../assets/icons";

const iconArray = [
  [0, chatgray, "chat"],
  [1, clipboardgray, "clipboard"],
  [2, gamegray, "game"],
  [3, giftgray, "gift"],
  [4, outdoorsgray, "outdoors"],
  [5, pingray, "pin"],
  [6, shoppinggray, "shopping"],
  [7, timegray, "time"],
  [8, travelgray, "travel"],
  [9, tvgray, "tv"],
  [10, viewgray, "view"],
  [11, weathergray, "weather"],
];

const Project = () => {
  const dispatch = useDispatch();
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

  if (project) {
    return (
      <>
        <Icon
          src={iconArray[Number(project.icon)][1]}
          alt={iconArray[2]}
          height="40px"
          width="40px"
        />
        <h1>{project.title}</h1>
        {taskArray.length === 0 && <NoTasks />}
        <h3>Name task:</h3>
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
      </>
    );
  } else {
    return <Error />;
  }
};

export default Project;
