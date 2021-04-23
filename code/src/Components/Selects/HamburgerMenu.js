import React, { useState } from "react";
import styled from "styled-components";

export const HamburgerMenu = ({ name, array, handleClick, order }) => {
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState();
  const [indicator, setIndicator] = useState();

  const onClickEvent = (item) => {
    if (name === "Sort") {
      order ? setIndicator("▲") : setIndicator("▼");
    } else {
      setIndicator("✔");
    }
    setSelected(item.name);
    handleClick(item);
  };

  return (
    <Wrapper>
      <Menu expand={expand} onClick={() => setExpand(!expand)}>
        {name}
      </Menu>
      <Container expand={expand}>
        {array.map((item) => (
          <Button
            key={item.name}
            selected={selected === "Reset" ? false : selected === item.name}
            indicator={indicator}
            onClick={() => {
              onClickEvent(item);
            }}
          >
            {item.name}
          </Button>
        ))}
      </Container>
    </Wrapper>
  );
};

//styled components

const Wrapper = styled.div`
  width: 98%;
  display: flex;
  margin-bottom: 5px;
  margin-left: 5px;
`;

const Menu = styled.button`
  width: 60px;
  background-color: white;
  border: none;
  border-bottom-style: solid;
  border-bottom-color: grey;
  border-bottom-width: 0.2px;
  font-family: "Raleway", sans-serif;
  text-align: left;
  font-size: 14px;
  margin-top: 3px;

  ${(props) =>
    props.expand &&
    `&::after{
      color: rgb(196, 232, 241);
      content: "◀";
      text-align: right;
    float:right;
    }`}

  ${(props) =>
    !props.expand &&
    `&::after{
        color: rgb(196, 232, 241);
        content:"▶" ;
        text-align: right;
        float:right;
      }`}
`;

const Container = styled.div`
  display: ${(props) => (props.expand ? "flex" : "none")};
  border-bottom-style: solid;
  border-bottom-color: grey;
  border-bottom-width: 0.2px;
  backgoround-color: white;
  margin-right: 5px;
  justify-content: space-evenly;
  flex: 1 1 auto;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  font-family: "Raleway", sans-serif;
  text-align: left;
  font-size: 14px;
  margin-top: 3px;

  ${(props) =>
    props.selected &&
    `&::after{
      color: darkcyan;
      content: "${props.indicator}";
    }`}
`;
