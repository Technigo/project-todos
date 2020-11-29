import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { todos } from "reducers/todos";
import { Button, CircleButton } from "lib/Buttons";
import swal from "sweetalert";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderHeading = styled.h1`
  color: black;
  font-size: 28px;
`;

const UserNameButton = styled.button`
  height: 20px;
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
