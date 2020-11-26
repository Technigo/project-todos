import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAddRounded";

const CustomLinkIconContainer = styled.div`
position: absolute;
top: 85%;
left: 75%;
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

export const AddTodoIcon = () => {
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
