import React from "react";
import moment from "moment";

import styled from "styled-components";

export const Header = () => {
  const currentDate = moment().format("dddd, MMM Do");
  const currentTime = moment().format("LT");

  return (
    <HeaderStyled>
      <div>
        <h2>MY TASKS</h2>
        <DatenTime>
          <p>
            {currentDate} - {currentTime}
          </p>
        </DatenTime>
      </div>
    </HeaderStyled>
  );
};
export const HeaderStyled = styled.div`
  border-bottom: 1px solid #8ea0e1;
  color: #e18ea0;
  width: 300px;
  margin-bottom: 25px;
  margin-top: 20px;
  text-align: center;

  @media (max-width: 668px) {
	border-bottom: none;
  } ;
`;

export const DatenTime = styled.p`
  color: black;

  @media (max-width: 668px) {
    margin: 8px;
    font-size: 13px;
  } ;
`;
