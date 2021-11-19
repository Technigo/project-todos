import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";

import todos from "../reducers/todos";

const options = [
  { value: "home", label: "Home" },
  { value: "school", label: "School" },
  { value: "dog", label: "Dog" },
  { value: "travel", label: "Travel" },
  { value: "shopping", label: "Shopping" },
  { value: "checked", label: "Checked" },
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

const FilterOptions = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log(event.value);
    dispatch(todos.actions.changeFilter(event.value));
  };

  return (
    <div>
      <label>
        Tags (optional)
        <Select
          name="filter-options"
          styles={styles}
          options={options}
          theme={theme}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default FilterOptions;
