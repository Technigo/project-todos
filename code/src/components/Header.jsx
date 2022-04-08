import React from "react";
import { useSelector } from "react-redux";
import ProjectCarousel from "./ProjectCarousel";
import { Link } from "react-router-dom";
import { Container } from "styledelements/elements";

const Header = () => {
  console.log(useSelector((store) => store.projects.project));
  const projects = useSelector((store) => store.projects.project);
  return (
    <>
      <h1>TO-DO HEADER</h1>
      <Container>
        <Link to="/newproject">
          <div role="button">Create new project!</div>
        </Link>
      </Container>
      {projects.length > 0 && <ProjectCarousel projects={projects} />}
    </>
  );
};

export default Header;
