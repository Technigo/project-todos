import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../../Reducers/todos";

export const CategoryFilter = () => {
  const dispatch = useDispatch();

  const categoryArr = [
    { name: "all", symbol: require("../../Assets/all.svg"), color: "#6e7c7c" },
    {
      name: "travel",
      symbol: require("../../Assets/travel.svg"),
      color: "#1687a7",
    },
    {
      name: "chores",
      symbol: require("../../Assets/chores.svg"),
      color: "#91091e",
    },
    {
      name: "recipes",
      symbol: require("../../Assets/recipe.svg"),
      color: "#184d47",
    },
    {
      name: "shopping",
      symbol: require("../../Assets/shopping.svg"),
      color: "#822659",
    },
    {
      name: "work",
      symbol: require("../../Assets/work.svg"),
      color: "#325288",
    },
    {
      name: "other",
      symbol: require("../../Assets/other.svg"),
      color: "#f0a500",
    },
  ];
  const cat = useSelector((store) => store.todos.category);
  const tasks = useSelector((store) => store.todos.items);

  const handleClick = (name) => {
    dispatch(todos.actions.categorize({ categorizeBy: name }));
  };

  return (
    <Categories>
      {categoryArr.map((category) => (
        <Wrapper key={category.name}>
          <Button
            active={category.name === cat[0].categorizeBy}
            bgColor={category.color}
            onClick={() => handleClick(category.name)}
          >
            {tasks.filter((task) => category.name === task.category[0])
              .length === 0 ? (
              <></>
            ) : (
              <TaskNumber>
                {
                  tasks.filter((task) => category.name === task.category[0])
                    .length
                }
              </TaskNumber>
            )}
            <Image
              active={category.name === cat[0].categorizeBy}
              src={category.symbol}
            />
          </Button>
        </Wrapper>
      ))}
    </Categories>
  );
};

const Categories = styled.div`
  width: 100%;
  display: flex;
  height: 50px;

  @media (min-width: 768px) {
    width: 510px;
  }
`;

const Wrapper = styled.div `
width: 100%;
display: flex;
justify-content: space-evenly;`

const Button = styled.button`
  flex: 1 1 auto;
  padding: 0;
  width: 30px;
  font-size: 20px;
  background: ${(props) => (props.active ? props.bgColor : "transparent")};
  border: none;
  border-radius: 5px;
  outline: none;
  position: relative;

  &:hover,
  &:focus,
  &:active {
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) => props.bgColor};
  }
`;

const Image = styled.img`
  object-fit: cover;
  filter: ${(props) =>
    props.active
      ? "invert(100%) sepia(100%) saturate(0%) hue-rotate(66deg) brightness(103%) contrast(103%)"
      : "invert(39%) sepia(19%) saturate(559%) hue-rotate(243deg) brightness(89%) contrast(92%)"};
  height: 60%;
`;

const TaskNumber = styled.div`
  height: 11px;
  width: 12px;
  font-size: 8px;
  padding-top: 2px;
  position: absolute;
  left: 3px;
  color: white;
  font-weight: bold;
  background: darkcyan;
  border-radius: 50%;
`;
