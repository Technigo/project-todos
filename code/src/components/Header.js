import React from "react";
import "components/header.css";
import { Date } from "components/Date";
import { ProgressBar } from "components/ProgressBar";

export const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1>My todos</h1>
        <Date />
      </div>
      <div className="progress-bar">
        <ProgressBar />
      </div>
    </header>
  );
};
