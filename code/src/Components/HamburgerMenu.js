import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { todos } from "../Reducers/todos";

export const HamburgerMenu = ({name, array, handleClick}) => {
    const [expand, setExpand] = useState(false);

   return( <>
    <Menu onClick={() => setExpand(!expand)}>{name}</Menu>
    <Container expand={expand}>
      {array.map((item) => (
        <Button
          onClick={() => {handleClick(item)
          }}
        >
          {item.name}
        </Button>
      ))}
    </Container>
  </>)
}

//styled components

const Menu = styled.button`
  align-self: flex-start;
  width: 107px;
  margin-left: 3px;
  background-color: white;
  border-style: solid;
  border-color: grey;
  border-width: 0.2px;
  border-radius: 5px;
  font-family: 'Raleway', sans-serif;
  text-align: left;
  font-size: 16px;
`;

const Container = styled.div`
  width: 105px;
  display: ${(props) => (props.expand ? "flex" : "none")};
  flex-direction: column;
  align-self: flex-start;
  border-style: solid;
  border-color: grey;
  border-width: 0.2px;
  margin-left: 3px;
  backgoround-color: white;
`;

const Button = styled.button`
  border: none;
  background-color: white;
`;
