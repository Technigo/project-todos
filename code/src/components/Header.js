import React from "react";
import { Counter } from "components/Counter";
import { DeleteAll } from "./DeleteAll";

export const Header = () => {
  return (
    <div className="header">
      <h1>Your personal todo list:</h1>
      <div>
        <Counter />
        <DeleteAll />
      </div>
    </div>
  );
};
