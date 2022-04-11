import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

// Import Icons'
import {
  chatwhite,
  clipboardwhite,
  gamewhite,
  giftwhite,
  outdoorswhite,
  pinwhite,
  shoppingwhite,
  timewhite,
  travelwhite,
  tvwhite,
  viewwhite,
  weatherwhite,
} from "../assets/icons";

const iconArray = [
  [chatwhite, "chat"],
  [clipboardwhite, "clipboard"],
  [gamewhite, "game"],
  [giftwhite, "gift"],
  [outdoorswhite, "outdoors"],
  [pinwhite, "pin"],
  [shoppingwhite, "shopping"],
  [timewhite, "time"],
  [travelwhite, "travel"],
  [tvwhite, "tv"],
  [viewwhite, "view"],
  [weatherwhite, "weather"],
];

const CarouselChildren = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <CarouselChild color={project.color}>
        <Icon
          src={iconArray[Number(project.icon)][0]}
          alt={iconArray[Number(project.icon)][1]}
        />
        <div>{project.title}</div>
      </CarouselChild>
    </Link>
  );
};

export default CarouselChildren;

const Icon = styled.img`
  height: 20px;
  width: 20px;
`;

const CarouselChild = styled.div`
  font-size: 18px;
  font-weight: 400;
  padding: 8px 10px;
  background-color: ${(props) => props.color};
  color: white;
  width: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  gap: 10px;
`;
