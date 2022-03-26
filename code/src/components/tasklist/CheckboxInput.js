import React from "react";
import styled from "styled-components";

//styled components
const Input = styled.input`
  width: 0.8em;
  cursor: pointer;
  font: inherit;
  height: 0.8em;
  margin-right: 10px;
`;

const CheckboxInput = ({ isComplete, itemId, onToggleTask }) => {
  return (
    <Input
      className="check-btn"
      type="checkbox"
      checked={isComplete}
      onChange={() => onToggleTask(itemId)}
    />
  );
};
export default CheckboxInput;
