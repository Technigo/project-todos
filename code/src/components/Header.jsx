import React from "react";
import { useSelector } from "react-redux";
import ProjectCarousel from "./ProjectCarousel";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import CarouselChildren from "./CarouselChildren";
import addgray from "../assets/addgray.svg";
import homeicon from "../assets/homeicon.svg";

const Header = () => {
  const projects = useSelector((store) => store.projects.project);
  return (
    <SiteHeader>
      <HeaderWrapper>
        <Link to="/">
          <HomeWrapper tabIndex="0">
            <HomeIcon src={homeicon} alt="Home Button" />
            <h1>TO-DO LISTS</h1>
          </HomeWrapper>
        </Link>
        <Link to="/newproject">
          <IconWrapper>
            <Icon src={addgray} alt="New to-do list button." tabIndex="0" />
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

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding: 15px 20px;

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    width: 600px;
    margin: 0 auto;
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

const IconWrapper = styled.div`
  border-radius: 50%;
  background-color: #dee2e6;
  height: 36px;
  width: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.7s ease-out;

  &:hover {
    transition: all 0.5s ease-in;
    transform: scale(1.2);
  }
`;
