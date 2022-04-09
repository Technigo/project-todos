import React from "react";
import { useSelector } from "react-redux";
import ProjectCarousel from "./ProjectCarousel";
import { Link } from "react-router-dom";
import CarouselChildren from "./CarouselChildren";

const Header = () => {
  console.log(useSelector((store) => store));
  const projects = useSelector((store) => store.projects.project);
  return (
    <>
      <Link to="/">
        <h1>TO-DO HEADER</h1>
      </Link>
      {projects.length > 0 && (
        <>
          <ProjectCarousel>
            {projects.map((project) => (
              <CarouselChildren key={project.id} project={project} />
            ))}
          </ProjectCarousel>
        </>
      )}
    </>
  );
};

export default Header;
