import React from "react";
import Select from "react-select";

const options = [
  { value: "home", label: "Home" },
  { value: "school", label: "School" },
  { value: "dog", label: "Dog" },
  { value: "travel", label: "Travel" },
  { value: "shopping", label: "Shopping" },
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
          name="tags"
          value={newProject}
          styles={styles}
          options={options}
          theme={theme}
          onChange={(todo) => {
            console.log(todo.target.value))
            setNewProject(todo.target.value)}}
        />
      </label>
    </div>
  );
};

export default AddTag;
