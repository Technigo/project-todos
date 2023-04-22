/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }

  label {
    display: inline-block;
  }

  .check {
    cursor: pointer;
    position: relative;
    margin: auto;
    width: 24px;
    height: 24px;
    padding-left: 30px; /* added padding */
    -webkit-tap-highlight-color: transparent;
    transform: translate3d(0, 0, 0);
  }

  .check:before {
    content: "";
    position: absolute;
    top: -15px;
    left: -15px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(34,50,84,0.03);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .check svg {
    position: relative;
    z-index: 1;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #444444;
    stroke-width: 3;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease;
  }

  .check svg path {
    stroke-dasharray: 60;
    stroke-dashoffset: 0;
  }

  .check svg polyline {
    stroke-dasharray: 22;
    stroke-dashoffset: 66;
  }

  .check:hover:before {
    opacity: 1;
  }

  .check:hover svg {
    stroke: #444444;
  }

  input[type="checkbox"]:checked + .check svg {
    stroke: #444444;
  }

  input[type="checkbox"]:checked + .check svg path {
    stroke-dashoffset: 60;
    transition: all 0.3s linear;
  }

  input[type="checkbox"]:checked + .check svg polyline {
    stroke-dashoffset: 42;
    transition: all 0.2s linear;
    transition-delay: 0.15s;
  }
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const StyledCheckbox = styled.label`
  display: inline-block;
  .check {
    cursor: pointer;
  }
`;

export const Checkbox = ({ taskId, checked, onChange }) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput id={taskId} checked={checked} onChange={onChange} />
      <StyledCheckbox htmlFor={taskId} className="check">
        <svg width="20px" height="20px" viewBox="0 0 18 18">
          <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z" />
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </StyledCheckbox>
    </CheckboxWrapper>
  );
};
