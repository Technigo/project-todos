import React from "react";
import "components/header.css";
import { Date } from "components/Date";

export const Header = () => {
  return (
    <header className="header">
      <h1>To Do</h1>
      <Date />
    </header>
  );
};
