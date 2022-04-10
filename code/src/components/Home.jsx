import React from "react";
import { useSelector } from "react-redux";
import NoProjects from "./NoProjects";

const Home = () => {
  const projects = useSelector((store) => store.projects.project);
  return <>{projects.length > 0 ? <h1>This is home</h1> : <NoProjects />}</>;
};

export default Home;
