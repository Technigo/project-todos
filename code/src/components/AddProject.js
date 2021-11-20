import React from "react";

const AddTag = ({ setNewProject, newProject }) => {
  return (
    <div>
      <label>
        Project (optional)
        <input
          type="text"
          name="projects"
          value={newProject}
          onChange={(todo) => setNewProject(todo.target.value)}
        />
      </label>
    </div>
  );
};

export default AddTag;
