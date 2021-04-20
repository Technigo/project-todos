import React from "react";
import { useSelector } from "react-redux";

import "./FooterStyle.css";
import { RoundedButton } from "./RoundedButton";

export const Footer = () => {
  return (
    <footer>
      <RoundedButton type="ClearAll" id="" />
    </footer>
  );
};
