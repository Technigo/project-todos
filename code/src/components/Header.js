import React from "react";
import styled from "styled-components";

const TopPage = styled.div`
  background: lightgreen;
  width: 270px;
  height: 100px;
  text-align: center;
  border-radius: 10px;

  h1 {
    color: white;
    padding-top: 30px;
  }
`;

const Header = () => {
  return (
    <TopPage>
      <h1>T O D O :</h1>
    </TopPage>
  );
};

export default Header;
