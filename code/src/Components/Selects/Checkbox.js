import React from "react";
import styled from "styled-components";

export const Checkbox = ({ className, checked, id, type, ...props }) => {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} id={id} {...props} />
      <StyledCheckbox checked={checked} type={type}>
        <Icon viewBox="1 1 22 26">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

//styled components
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

// Hide checkbox visually but remain accessible to screen readers.
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: ${(props) => (props.type === "task" ? "30px" : "15px")};
  height: ${(props) => (props.type === "task" ? "30px" : "15px")};
  background: ${(props) =>
    props.checked ? " rgb(61, 136, 153)" : "rgb(217, 234, 238)"};
  border-radius: ${(props) => (props.type === "task" ? "50%" : "3px")};
  transition: all 150ms;
  margin: 5px;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgb(110, 157, 168);
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
