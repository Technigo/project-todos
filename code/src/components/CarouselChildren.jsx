import React from "react";
import { CarouselChild, CarouselIcon } from "styledelements/elements";
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
        <CarouselIcon src={iconArray[Number(project.icon)][0]} />
        <div>{project.title}</div>
      </CarouselChild>
    </Link>
  );
};

export default CarouselChildren;
