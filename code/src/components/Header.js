import React from "react";
import { Counter } from "components/Counter";

export const Header = () => {
  return (
    <div>
      <h1>Your personal todo list:</h1>
      <Counter />
    </div>
  );
};
