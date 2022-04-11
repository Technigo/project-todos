import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

const NewProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [projectName, chooseProjectName] = useState("");
  const [icon, chooseIcon] = useState("");
  const [color, chooseColor] = useState("");
  const [error, setError] = useState(false);
  const colorArray = useSelector((store) => store.colors.colors);

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
    <NewProjectWrapper>
      <h2>Name of project list:</h2>
      <TextInput
        type="text"
        onChange={(event) => chooseProjectName(event.target.value)}
        width="100%"
        maxLength="12"
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
            key={item.id}
            value={item.hex}
            onClick={selectColor}
            backgroundcolor={item.rgba}
          >
            {item.name}
          </ColorButton>
        ))}
      </GridContainer>
      {error && <p>Please complete and select all the required fields.</p>}
      <SubmitButton role="button" onClick={createProject}>
        Create project to-do!
      </SubmitButton>
    </NewProjectWrapper>
  );
};

export default NewProject;

const NewProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

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
  background-color: #dee2e6;

  &:hover {
    border: 1px solid #212529;
  }

  &:focus {
    border: 1px solid #212529;
  }
`;

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

const SubmitButton = styled.div`
  background-color: #dee2e6;
  border: 2px solid #212529;
  font-size: 18px;
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  color: #212529;
`;
