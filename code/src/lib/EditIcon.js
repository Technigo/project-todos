import React from "react";
import styled from "styled-components";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const EditTodoIcon = styled.button`
  width: 45px;
  height: 45px;
  background-color: #fafafa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
`;

export const EditIcon = () => {
  return (
    <EditTodoIcon>
      <EditOutlinedIcon />
    </EditTodoIcon>
  );
};
