import React from "react";
import styled from "styled-components";

import { Checkbox } from "../Selects/Checkbox";

export const SelectCategory = ({ setCategory, checked, setChecked }) => {
  const categoryArr = [
    {name: "travel", symbol:require("../../Assets/travel.svg")},
    {name: "chores", symbol: require("../../Assets/chores.svg")}, 
    {name: "recipes", symbol:require("../../Assets/recipe.svg")},
    {name: "shopping", symbol:require("../../Assets/shopping.svg")},
    {name: "work", symbol:require("../../Assets/work.svg")},
    {name: "other", symbol:require("../../Assets/other.svg")}
  ];
  let newArr = []
  const handleChange = (item) => {
    setChecked(item.name)
    newArr= [item.name, item.symbol];
    setCategory(newArr)
  }

  return (
    <CheckboxWrapper>
      {categoryArr.map((item) => (
        <Label htmlFor={item.name}>
          <Checkbox
            checked={checked === item.name}
            onChange={() => handleChange(item)}
            id={item.name}
            type="category"
          />
          {item.name}
        </Label>
      ))}
    </CheckboxWrapper>
  );
};
const Label = styled.label`
  margin-left: 10px;
  font-size: 14px;
  color: grey;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  padding: 5px;
`;
