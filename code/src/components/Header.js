import React from "react";
import { todos } from "reducers/todos";
import { useDispatch, useSelector } from "react-redux";

import swal from "sweetalert";

import styled from "styled-components";
import { Button, CircleButton } from "lib/Buttons";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderHeading = styled.h1`
  color: black;
  font-size: 28px;
`;

export const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.todos.username);

  const handleOnClick = () => {
    swal({
      content: {
        element: "input",
        attributes: {
          placeholder: "Type your name",
          type: "text",
        },
      },
    }).then((value) => {
      if (value) {
        const name =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        dispatch(todos.actions.setUserName(name));
      }
    });
  };

  return (
    <HeaderContainer>
      <HeaderHeading>{userName && `${userName}'s`} Todo</HeaderHeading>
      {userName ? (
        <CircleButton onClick={handleOnClick} />
      ) : (
        <Button onClick={handleOnClick}>Add user name</Button>
      )}
    </HeaderContainer>
  );
};
