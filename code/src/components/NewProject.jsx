import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { projects } from "reducers/projects";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";
import uniqid from "uniqid";

// Import Styling
import { GridContainer, TextInput } from "styledelements/elements";

const NewProject = () => {
  const [projectName, chooseProjectName] = useState("");
  const [icon, chooseIcon] = useState();
  const [color, chooseColor] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const colorArray = useSelector((store) => store.colors.colors);
  const iconArray = useSelector((store) => store.icons.icons);

  // Create Unique Project ID
  let projectId = uniqid("project-");

  // Select Icon Button
  const selectIcon = (event) => {
    chooseIcon(event.currentTarget.value);
  };

  // Select Color Button
  const selectColor = (event) => {
    chooseColor(event.target.value);
    // setColorActive(event.target.value);
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
          tasks: [],
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
              onKeyDown={(e) => e.key === "Enter" && selectIcon(e)}
              selected={`${Number(icon) === Number(item[0]) ? "selected" : ""}`}
            >
              <Icon src={item[2]} alt={item[2]} />
            </IconButton>
          </React.Fragment>
        ))}
      </GridContainer>
      <h2>Select a color:</h2>
      <GridContainer gridcolumns="1fr 1fr" gridrows="auto">
        {colorArray.map((item) => (
          <ColorButton
            key={item.id}
            value={item.hex}
            onClick={selectColor}
            backgroundcolor={item.hex}
            onKeyDown={(e) => e.key === "Enter" && selectColor(e)}
            selected={`${color === item.hex ? "selected" : ""}`}
          >
            {item.name}
          </ColorButton>
        ))}
      </GridContainer>
      {error && <p>Please complete and select all the required fields.</p>}
      <SubmitButton
        role="button"
        tabIndex="0"
        onClick={createProject}
        onKeyDown={(e) => e.key === "Enter" && createProject()}
      >
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
  cursor: pointer;
  background-color: #dee2e6;
  border: ${(props) => (props.selected ? "1px solid #212529" : "none")};

  &:hover {
    border: 1px solid #212529;
  }

  &:focus {
    border: 1px solid #212529;
  }
`;

const ColorButton = styled.button`
  width: auto;
  background-color: ${(props) => props.backgroundcolor};
  opacity: ${(props) => (props.selected ? "1.0" : "0.7")};
  color: white;
  border: none;
  font-weight: 600;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 1;
  }

  &:focus {
    opacity: 1;
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
