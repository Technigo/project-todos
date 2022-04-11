import React from "react";
import { useSelector } from "react-redux";
import ProjectCarousel from "./ProjectCarousel";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { keyframes } from "styled-components";
import CarouselChildren from "./CarouselChildren";
import addgray from "../assets/addgray.svg";
import homeicon from "../assets/homeicon.svg";

const Header = () => {
  console.log(useSelector((store) => store));
  const projects = useSelector((store) => store.projects.project);
  return (
    <SiteHeader>
      <HeaderWrapper>
        <Link to="/">
          <HomeWrapper>
            <HomeIcon src={homeicon} alt="Home Logo" />
            <h1>TO-DO LISTS</h1>
          </HomeWrapper>
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
    color: #dee2e6;
  }
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const HomeIcon = styled.img`
  height: 30px;
  width: 30px;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const grow = keyframes`
0% { transform: scale(1); }
100% { transform: scale(1.2); }
`;

const shrink = keyframes`
0% { transform: scale(1.2); }
100% { transform: scale(1); }
`;

const IconWrapper = styled.div`
  border-radius: 50%;
  background-color: #dee2e6;
  height: 36px;
  width: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  animation: ${shrink} 0.7s;
  animation-fill-mode: forwards;

  &:hover {
    animation: ${grow} 1s;
    animation-fill-mode: forwards;
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
