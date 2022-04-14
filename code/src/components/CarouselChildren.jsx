import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CarouselChildren = ({ project }) => {
  const iconArray = useSelector((store) => store.icons.icons);
  return (
    <Link to={`/projects/${project.id}`}>
      <CarouselChild color={project.color}>
        <Icon
          src={iconArray[Number(project.icon)][3]}
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
