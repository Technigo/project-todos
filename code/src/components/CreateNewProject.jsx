import React from "react";
import { Link } from "react-router-dom";

const CreateNewProject = () => {
  return (
    <Link to="/newproject">
      <div role="button">Create new project!</div>
    </Link>
  );
};

export default CreateNewProject;
