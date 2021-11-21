import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import styled from "styled-components";

import todos from "../reducers/todos";

const options = [
  { value: "showall", label: "Show all" },
  { value: "checked", label: "Checked" },
  { value: "unchecked", label: "Unchecked" },
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
    fontSize: "12px",
  }),
  menu: (base) => ({
    ...base,
    fontFamily: "Rubik",
    fontSize: "12px",
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

const Wrapper = styled.div`
  width: 125px;
  font-size: 12px;
`;

const FilterOptions = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(todos.actions.changeFilter(event.value));
  };

  return (
    <Wrapper>
      <label>
        Filter
        <Select
          name="filter-options"
          styles={styles}
          options={options}
          theme={theme}
          onChange={handleChange}
        />
      </label>
    </Wrapper>
  );
};

export default FilterOptions;
