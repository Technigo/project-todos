import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const DeadlineCountdown = ({ deadline, isComplete }) => {
  const [textColor, setTextColor] = useState("green");
  const today = new Date(Date.now());
  const duedate = new Date(deadline);
  const diff = duedate - today;

  const msToTime = (ms) => {
    let print = "";
    const minutes = Math.floor(ms / (1000 * 60)).toFixed(0);
    const hours = Math.floor(minutes / 60).toFixed(0);
    const days = Math.floor(hours / 24).toFixed(0);
    const weeks = Math.floor(days / 7).toFixed(0);

    const printDays = days - weeks * 7;
    const printHours = hours - days * 24;
    const printMinutes = minutes - hours * 60;

    if (weeks >= 1) {
      print += ` ${weeks} Weeks `;
    }
    if (printDays >= 1) {
      print += `${printDays} Days`;
    }
    if (printHours < 24 && printHours > 0) {
      print += ` ${printHours}h`;
    }
    if (printMinutes < 60 && printMinutes > 0) {
      print += ` ${printMinutes}min`;
    }

    return print;
  };

  useEffect(() => {
    if (diff > 1000 * 60 * 60 * 24) {
      setTextColor("#6e5773");
    } else if (diff > 1000 * 60 * 60) {
      setTextColor("#ea9085");
    } else {
      setTextColor("#d45d79");
    }
  }, [diff]);

  if (deadline === "3030-30-30" || isComplete) {
    return <p></p>;
  }

  return (
    <Text textColor={textColor}>
      {diff <= 0 ? "Over due!" : `Due in ${msToTime(diff)}`}{" "}
    </Text>
  );
};

const Text = styled.p`
  color: ${(props) => props.textColor};
  font-weight: 600;
  padding-left: 10px;
  margin: 5px 0;
  font-family: "Roboto", sans-serif;
`;
