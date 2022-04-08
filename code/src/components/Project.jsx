import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Error from "./Error";

const Project = () => {
  const id = useParams().id;
  const projectArray = useSelector((store) => store.projects.project);

  const project = projectArray.find((x) => x.id === id);

  if (project) {
    return (
      <>
        <h1>Project title: {project.title}</h1>
      </>
    );
  } else {
    return <Error />;
  }
};

export default Project;
