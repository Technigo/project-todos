import React, {useState, useEffect} from "react";
import styled from "styled-components";

export const DeadlineCountdown = ({ deadline, isComplete }) => {
  const [textColor, setTextColor] = useState("green")
  const today = new Date(Date.now());
  const duedate = new Date(deadline);
  const diff = duedate-today;

  console.log(diff)

  const msToTime = (ms) => {
    let print = "";
   const minutes = Math.floor((ms / (1000 * 60))).toFixed(0);
   const hours = Math.floor((minutes / 60)).toFixed(0);
   const days = Math.floor((hours / 24)).toFixed(0);
   const weeks = Math.floor((days / 7)).toFixed(0);
   
   console.log(deadline)
   if(weeks >= 1){print += ` ${weeks} Weeks `;}
   if (days-(weeks*7) >= 1) {print += `${days-(weeks*7)} Days`;}
   if (hours-(days*24) < 24 && hours-(days*24)>0)  {print += ` ${hours-(days*24)}h`;}
   if (minutes-(hours*60) < 60 && minutes-(hours*60)>0) {print += ` ${minutes-(hours*60)}min`;}
    
    return print;
  }

  useEffect(() => {
    if(diff > (1000 * 60 * 60 * 24) ){
      setTextColor("green")
    } else if ( diff > (1000 * 60 * 60)){
      setTextColor("orange")
    } else {
      setTextColor("red")
    }
  }, [diff])

  if (deadline === "" || isComplete) {
    return <p></p>;
  }

  return <Text textColor={textColor}> Due in {msToTime(diff)} </Text>;
};

const Text = styled.p`
  color: ${(props) => props.textColor};
  padding-left: 10px;
  margin: 5px 0;
  font-family: "Roboto", sans-serif;
`;
