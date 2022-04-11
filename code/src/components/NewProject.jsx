import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { projects } from "reducers/projects";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";

// Import Styling
import { GridContainer, TextInput } from "styledelements/elements";

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

// Change to useSelector!!!
const colorArray = [
  [0, "#E52E4E", "229, 46, 78", "red"],
  [1, "#F7643B", "247, 100, 59", "orange"],
  [2, "#DF8D00", "223, 141, 0", "yellow"],
  [3, "#10AE21", "16, 174, 32", "green"],
  [4, "#04A9A4", "4, 169, 164", "teal"],
  [5, "#00A8DB", "0, 168, 219", "light blue"],
  [6, "#1183DA", "17, 131, 218", "dark blue"],
  [7, "#E929BA", "233, 41, 186", "pink"],
  [8, "#7B39ED", "123, 57, 237", "purple"],
  [9, "#666666", "102, 102, 102", "gray"],
];

const NewProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [projectName, chooseProjectName] = useState("");
  const [icon, chooseIcon] = useState("");
  const [color, chooseColor] = useState("");
  const [error, setError] = useState(false);

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

  // Trying to toggle classes on buttons
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
    if (!projectName || !icon || !color) {
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
      navigate(`/projects/${projectId}`);
    }
  };

  return (
    <div>
      <h2>Name of project list:</h2>
      <TextInput
        type="text"
        onChange={(event) => chooseProjectName(event.target.value)}
        width="100%"
        // maxlength="13"
      />
      <h2>Choose your icon:</h2>
      <GridContainer gridcolumns="1fr 1fr 1fr">
        {iconArray.map((item) => (
          <React.Fragment key={item[0]}>
            <IconButton
              key={item[0]}
              role="button"
              value={item[0]}
              onClick={selectIcon}
            >
              <Icon src={item[1]} alt={icon[2]} />
            </IconButton>
          </React.Fragment>
        ))}
      </GridContainer>
      <h2>Select a color:</h2>
      {/* !!! Change to useSelector !!! */}
      <GridContainer gridcolumns="1fr 1fr" gridrows="auto">
        {colorArray.map((item) => (
          <ColorButton
            key={item[0]}
            value={item[1]}
            onClick={selectColor}
            backgroundcolor={item[2]}
          >
            {item[3]}
          </ColorButton>
        ))}
      </GridContainer>
      {error && <p>Please select all the required fields.</p>}
      <button onClick={createProject}>Create project to-do!</button>
    </div>
  );
};

export default NewProject;

// Icon Button
const Icon = styled.img`
  height: 30px;
  width: 30px;
`;

const IconButton = styled.button`
  border-radius: 50%;
  height: 55px;
  width: 55px;
  justify-self: center;
  border: none;
  cursor: pointer;

  &:hover {
    border: 1px solid #212529;
  }

  &:focus {
    border: 1px solid #212529;
  }
`;

// Button Styling
const ColorButton = styled.button`
  width: auto;
  background-color: rgba(${(props) => props.backgroundcolor}, 0.7);
  color: white;
  border: none;
  font-weight: 600;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: rgba(${(props) => props.backgroundcolor}, 1);
  }

  &:focus {
    background-color: rgba(${(props) => props.backgroundcolor}, 1);
  }
`;
