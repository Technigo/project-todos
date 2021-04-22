import React from "react";
import styled from "styled-components";

import { Checkbox } from "../Selects/Checkbox";

export const SelectCategory = ({ setCategory, category }) => {
  const categoryArr = [
    "travel",
    "chores",
    "recipes",
    "shopping",
    "work",
    "other",
  ];

  return (
    <CheckboxWrapper>
      {categoryArr.map((item) => (
        <Label htmlFor={item}>
          <Checkbox
            checked={category === item}
            onChange={() => setCategory(item)}
            id={item}
            type="category"
          />
          {item}
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
