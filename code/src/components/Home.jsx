import React from "react";
import { useSelector } from "react-redux";
import NoProjects from "./NoProjects";
import ProjectList from "./ProjectList";
import { Container } from "styledelements/elements";

const Home = () => {
  const projects = useSelector((store) => store.projects.project);
  return (
    <Container>
      {projects.length > 0 ? <ProjectList /> : <NoProjects />}
    </Container>
  );
};

export default Home;
