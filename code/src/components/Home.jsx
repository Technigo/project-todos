import React from "react";
import EmptyState from "./EmptyState";
import { projects } from "reducers/projects";

const Home = () => {
  return <>{projects.length ? <h1>This is home</h1> : <EmptyState />}</>;
};

export default Home;
