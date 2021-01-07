import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAddRounded";

import breakpoints from "./Breakpoints";

const CustomLinkIconContainer = styled.div`
position: absolute;
top: 85%;
left: 75%;

& :hover {
  transform: scaleX(1.2) scaleY(1.2);
  background-color: #006972;
  transition: .3s ease-in-out;
}

@media only screen and ${breakpoints.device.tablet} {
  left: 87%;
  top: 80%;
`;

const CustomLinkIcon = styled.button`
  width: 55px;
  height: 55px;
  background-color: #00838f;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4), 0 0 11px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: white;   
`;

export const AddTodoButton = () => {
  return (
    <CustomLinkIconContainer>
      <Link to={`/todo/`}>
        <CustomLinkIcon>
          <PostAddIcon style={{ fontSize: 32 }} />
        </CustomLinkIcon>
      </Link>
    </CustomLinkIconContainer>
  );
};