import React from "react";
import Select from "react-select";

const options = [
  { value: "prio1", label: "Prio 1" },
  { value: "prio2", label: "Prio 2" },
  { value: "prio3", label: "Prio 3" },
];

const styles = {
  control: (base) => ({
    ...base,
    fontFamily: "Rubik",
    fontSize: "16px",
  }),
  menu: (base) => ({
    ...base,
    fontFamily: "Rubik",
    fontSize: "16px",
  }),
};

const theme = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary25: "purple",
  },
});

const AddTag = ({ setNewProject, newProject }) => {
  return (
    <div>
      <label>
        Project (optional)
        <Select
          name="projects"
          value={newProject}
          styles={styles}
          options={options}
          theme={theme}
          onChange={(todo) => {
            console.log("Project is set to: ", todo.value);
            setNewProject(todo.value);
          }}
        />
      </label>
    </div>
  );
};

export default AddTag;
