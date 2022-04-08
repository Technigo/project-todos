import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { projects } from "reducers/projects";
import { Link } from "react-router-dom";

const NewProject = () => {
  const dispatch = useDispatch();
  const [projectName, chooseProjectName] = useState("");
  const [icon, chooseIcon] = useState("");
  const [color, chooseColor] = useState("");
  const [error, setError] = useState(false);
  console.log(projectName, icon, color);

  const buttonArray = [
    [1, "⚽️"],
    [2, "🎱"],
    [3, "🏓"],
    [4, "🪃"],
    [5, "🥋"],
    [6, "🏹"],
  ];

  const colorArray = [
    [1, "red"],
    [2, "green"],
    [3, "blue"],
    [4, "purple"],
    [5, "gray"],
    [6, "black"],
  ];

  let projectId = "";

  const randomId = () => {
    projectId =
      Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  randomId();

  const createProject = () => {
    if (!projectName === 0 || !icon || !color) {
      setError(true);
    } else {
      dispatch(
        projects.actions.addProject({
          id: projectId,
          title: projectName,
          icon: icon,
          color: color,
        })
      );
    }
  };

  return (
    <div>
      <h2>Name your list:</h2>
      <input
        type="text"
        onChange={(event) => chooseProjectName(event.target.value)}
      ></input>
      <h2>Choose your icon:</h2>
      {buttonArray.map((item) => (
        <button
          value={item[0]}
          onClick={(event) => chooseIcon(event.target.value)}
        >
          {item[1]}
        </button>
      ))}
      <h2>Select a color:</h2>
      {colorArray.map((item) => (
        <button
          value={item[1]}
          onClick={(event) => chooseColor(event.target.value)}
        >
          {item[1]}
        </button>
      ))}
      {error && <p>Please select all the required fields.</p>}
      <Link to={`/projects/${projectId}`}>
        <div role="button" onClick={createProject}>
          Create project to-do!
        </div>
      </Link>
    </div>
  );
};

export default NewProject;
