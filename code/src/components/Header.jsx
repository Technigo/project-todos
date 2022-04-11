import React from "react";
import { useSelector } from "react-redux";
import ProjectCarousel from "./ProjectCarousel";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import CarouselChildren from "./CarouselChildren";
import addgray from "../assets/addgray.svg";

const Header = () => {
  console.log(useSelector((store) => store));
  const projects = useSelector((store) => store.projects.project);
  return (
    <SiteHeader>
      <HeaderWrapper>
        <Link to="/">
          <h1>TO-DO LISTS</h1>
        </Link>
        <Link to="/newproject">
          <IconWrapper>
            <Icon src={addgray} alt="New to-do list button." />
          </IconWrapper>
        </Link>
      </HeaderWrapper>
      {projects.length > 0 && (
        <>
          <ProjectCarousel>
            {projects.map((project) => (
              <CarouselChildren key={project.id} project={project} />
            ))}
          </ProjectCarousel>
        </>
      )}
    </SiteHeader>
  );
};

export default Header;

const SiteHeader = styled.header`
  width: 100vw;
  overflow: hidden;
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  background-color: #212529;
  color: #f8f9fa;

  a {
    color: #f8f9fa;
  }
`;

const Icon = styled.img`
  height: 28px;
  width: 28px;
`;

const IconWrapper = styled.div`
  border-radius: 50%;
  background-color: #dee2e6;
  height: 40px;
  width: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.1);
    // border: 2px solid white;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;

  a:hover {
    text-decoration: underline;
  }
`;
