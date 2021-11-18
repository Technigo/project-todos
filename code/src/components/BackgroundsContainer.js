import React from "react";
import { BackgroundSelection } from "components/BackgroundSelection";
import { useDispatch, useSelector } from "react-redux";
import custom from "reducers/custom";

export const BackgroundContainer = () => {
  const dispatch = useDispatch();
  const bgs = useSelector((store) => store.custom.bgs);
  const changeBackground = (item) => {
    dispatch(custom.actions.selectBackground(item));
  };

  return (
    <BackgroundSelection>
      {bgs.map((item) => (
        <div key={item} className="background-pic-wrapper" onClick={() => changeBackground(item)}>
          <img className="background-picture" src={item} alt={item}></img>
        </div>
      ))}
    </BackgroundSelection>
  );
};
