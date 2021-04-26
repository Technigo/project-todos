import React from "react";
import { useSelector } from "react-redux";
import Select from "react-select";

import { FilterContainer, LabelText } from "../../styledcomponents/StyledTaskList";


export const FilterTasks = ({ category, onChange }) => {
  const filterCategories = useSelector((state) => state.todos.filterCategories);

  return (
    <FilterContainer>
      <LabelText>Filter tasks:</LabelText>
      <Select 
        className="filter"
        value={category}
        onChange={onChange}
        options={filterCategories} />
    </FilterContainer>
  )
};