import React from "react";
import styled from "styled-components/macro";

const HeadingOne = styled.h1`
  font-family: "Ranga", cursive;
  font-size: 64px;
  font-weight: 400;
  text-shadow: 2.5px 4px 2px rgba(102, 102, 153, 0.5);
  margin-bottom: 5px;
  line-height: 64px;
  text-align: center;
`;

const AllDone = () => {
  return (
    <header>
      <HeadingOne>No To-Dos here!</HeadingOne>
    </header>
  );
};

export default AllDone;
