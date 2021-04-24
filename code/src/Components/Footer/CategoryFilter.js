import React, { useEffect, useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../../Reducers/todos";

export const CategoryFilter = () => {
  const dispatch = useDispatch();
 
  const categoryArr = [
    { name: "all", symbol: require("../../Assets/all.svg"), color: "#6e7c7c"},
    { name: "travel", symbol: require("../../Assets/travel.svg"), color: "#1687a7"},
    { name: "chores", symbol: require("../../Assets/chores.svg"), color:"#91091e"},
    { name: "recipes", symbol: require("../../Assets/recipe.svg"), color:"#184d47"},
    { name: "shopping", symbol: require("../../Assets/shopping.svg"), color:"#822659"},
    { name: "work", symbol: require("../../Assets/work.svg"), color:"#325288"},
    { name: "other", symbol: require("../../Assets/other.svg"), color:"#f0a500"},
  ];
  const filters = useSelector((store) => store.todos.filters)

  const handleClick = (name) => {
    dispatch(todos.actions.categorize({ categorizeBy: name }));
    dispatch(todos.actions.filterBy({type: "byCategory", value: name}))
  };

  return (
    <Categories>
      {categoryArr.map((category) => (
        <Button
          key={category.name}
          active={category.name === filters[0].byCategory}
          bgColor={category.color}
          onClick={() => handleClick(category.name)}
        >
          <Image active={category.name === filters[0].byCategory} src={category.symbol} />
        </Button>
      ))}
    </Categories>
  );
};

const Categories = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 50px;
`;

const Button = styled.button`
  flex: 1 1 auto;
  padding: 0;
  width: 30px;
  font-size: 20px;
  background: ${(props) =>
    props.active ? props.bgColor : "transparent"};
  border: none;
  border-radius: 5px;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.bgColor};
  }
`;

const Image = styled.img`
  object-fit: cover;
  filter: ${(props) => props.active 
    ? 'invert(100%) sepia(100%) saturate(0%) hue-rotate(66deg) brightness(103%) contrast(103%)' 
    : 'invert(58%) sepia(5%) saturate(3064%) hue-rotate(145deg) brightness(95%) contrast(95%)'};
  height: 60%;

`;
