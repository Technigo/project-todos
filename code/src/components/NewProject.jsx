import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { projects } from "reducers/projects";
import { Link } from "react-router-dom";

// Import Styling
import {
  ColorButton,
  GridContainer,
  IconButton,
  Icon,
  TextInput,
} from "styledelements/elements";

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

const NewProject = () => {
  const dispatch = useDispatch();
  const [projectName, chooseProjectName] = useState("");
  const [icon, chooseIcon] = useState("");
  const [color, chooseColor] = useState("");
  const [error, setError] = useState(false);

  const iconArray = [
    [0, chatgray],
    [1, clipboardgray],
    [2, gamegray],
    [3, giftgray],
    [4, outdoorsgray],
    [5, pingray],
    [6, shoppinggray],
    [7, timegray],
    [8, travelgray],
    [9, tvgray],
    [10, viewgray],
    [11, weathergray],
  ];

  const colorArray = [
    [0, "#E52E4E", "red"],
    [1, "#F7643B", "orange"],
    [2, "#DF8D00", "yellow"],
    [3, "#10AE21", "green"],
    [4, "#04A9A4", "teal"],
    [5, "#00A8DB", "light blue"],
    [6, "#1183DA", "dark blue"],
    [7, "#E929BA", "pink"],
    [8, "#7B39ED", "purple"],
    [9, "#666666", "gray"],
  ];

  // Create Unique Project ID
  let projectId = "";
  const randomId = () => {
    projectId =
      Date.now().toString(36) + Math.random().toString(36).substring(2);
  };
  randomId();

  // Select Icon Button
  const selectIcon = (event) => {
    chooseIcon(event.currentTarget.value);
  };

  // let selectBtns = document.querySelectorAll(
  //   ".elements__IconButton-sc-f5m284-4"
  // );
  // selectBtns.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     selectBtns.forEach((b) => b.classList.remove("iconButtonActive"));
  //     btn.classList.add("iconButtonActive");
  //   });
  // });

  // Select Color Button
  const selectColor = (event) => {
    chooseColor(event.target.value);
  };

  // Create Project Button
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

  console.log(projectId, projectName, icon, color);

  return (
    <div>
      <h2>Name of project list:</h2>
      <TextInput
        type="text"
        onChange={(event) => chooseProjectName(event.target.value)}
        width="100%"
      />
      <h2>Choose your icon:</h2>
      <GridContainer gridcolumns="1fr 1fr 1fr" gap="10px">
        {iconArray.map((item) => (
          <IconButton
            key={item[0]}
            role="button"
            value={item[0]}
            onClick={selectIcon}
          >
            <Icon src={item[1]} />
          </IconButton>
        ))}
      </GridContainer>
      <h2>Select a color:</h2>
      <GridContainer gridcolumns="1fr 1fr" gridrows="auto" gap="10px">
        {colorArray.map((item) => (
          <ColorButton
            key={item[0]}
            value={item[0]}
            onClick={selectColor}
            backgroundcolor={item[1]}
          >
            {item[2]}
          </ColorButton>
        ))}
      </GridContainer>
      {error && <p>Please select all the required fields.</p>}
      <Link to={`/projects/${projectId}`}>
        <button onClick={createProject}>Create project to-do!</button>
      </Link>
    </div>
  );
};

export default NewProject;
