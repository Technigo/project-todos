import React, { useState } from "react";
import styled from "styled-components";

export const MenuButtons = ({ name, array, handleClick, order }) => {
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
      <Menu>{name}</Menu>
      <Container>
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
  border: none;
  background: transparent;
  font-family: "Raleway", sans-serif;
  text-align: left;
  font-size: 14px;
  margin-top: 3px;
  margin-right: 20px;
  color: #d45d79;
  font-weight: 600;
  outline: none;
  
  &:hover,
  &:focus {
    border-color:  #d45d79;
    border-style: solid;
    border-width: 1px;

`;

const Container = styled.div`
  width: 100%;
  margin-right: 5px;
  flex: 1 1 auto;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Button = styled.button`
  border: none;
  border-right-style: solid;
  border-right-color: #ea9085;
  background: transparent;
  font-family: "Raleway", sans-serif;
  text-align: left;
  font-size: 14px;
  margin-top: 3px;
  color: #ea9085;
  outline: none;
  cursor: pointer;

  &:last-of-type {
    border: none;
  }

  &:hover,
  &:focus {
    background: #d45d79;
    color: white;
  }

  ${(props) =>
    props.selected &&
    `&::after{
      content: "${props.indicator}";
    }`}
`;
