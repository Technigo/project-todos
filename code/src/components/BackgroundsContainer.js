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
        <img className="background-picture" src={watch} alt="watch"></img>
      </div>
      <div className="background-pic-wrapper">
        <img className="background-picture" src={pencil} alt="pencil"></img>
      </div>
      <div className="background-pic-wrapper">
        <img className="background-picture" src={magnets} alt="magnets"></img>
      </div>
      <div className="background-pic-wrapper">
        <img className="background-picture" src={notes} alt="notes"></img>
      </div>
    </BackgroundSelection>
  );
};
