import React from "react";
import { useSelector } from "react-redux";
import Select from "react-select";

import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  margin-bottom: 10px;
  width: 100%;
  
`;

const LabelText = styled.p`
  font-size: 14px;
  font-family: ${props => props.fontFamily};
  font-weight: bold;
  margin: 2px;
`;

export const FilterTodos = ({ category, onChange }) => {
  const filterCategories = useSelector((state) => state.todos.filterCategories)

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
}