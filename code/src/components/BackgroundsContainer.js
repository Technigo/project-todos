import React from "react";
import { BackgroundSelection } from "components/BackgroundSelection";
import watch from "../assets/watch.jpg";
import notes from "../assets/notes.jpg";
import magnets from "../assets/magnets.jpg";
import pencil from "../assets/pencil.jpg";

export const BackgroundContainer = () => {
  return (
    <BackgroundSelection>
      <div className="background-pic-wrapper">
        <img className="background-picture" src={watch} alt="background-picture"></img>
      </div>
      <div className="background-pic-wrapper">
        <img className="background-picture" src={pencil} alt="background-picture"></img>
      </div>
      <div className="background-pic-wrapper">
        <img className="background-picture" src={magnets} alt="background-picture"></img>
      </div>
      <div className="background-pic-wrapper">
        <img className="background-picture" src={notes} alt="background-picture"></img>
      </div>
    </BackgroundSelection>
  );
};
