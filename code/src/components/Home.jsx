import React from "react";
import NoProjects from "./NoProjects";
import { projects } from "reducers/projects";

const Home = () => {
  return <>{projects.length ? <h1>This is home</h1> : <NoProjects />}</>;
};

export default Home;
