import React from "react";
import moment from "moment";
import styled from "styled-components";

const HeadingTwoDate = styled.div`
  margin: 10px auto;
  font-weight: bolder;
  font-family: "Indie Flower", cursive;
  color: #b35900;
  font-size: 28px;
`;

const Date = () => {
  return <HeadingTwoDate>{moment().format("Do MMMM YY")}</HeadingTwoDate>;
};
export default Date;
