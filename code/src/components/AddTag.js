import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

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

const animatedComponents = makeAnimated();

const AddTag = ({ setNewTags, newTags }) => {
  const handleChange = (event) => {
    setNewTags(event);
  };
  return (
    <div>
      <label>
        Tags (optional)
        <Select
          isMulti
          name="tags"
          value={newTags}
          styles={styles}
          options={options}
          closeMenuOnSelect={false}
          components={animatedComponents}
          theme={theme}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default AddTag;
