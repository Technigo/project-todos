import React from "react";
import moment from "moment";
import styled from "styled-components";

const AppHeader = styled.header`
  display: flex;
  justify-content: flex-end;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: min-content;
  margin: 30px 50px 20px;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 60px;
  line-height: 70px;
  color: #ffbcbc;
  margin: 0;
`;
const Date = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 0;
`;

const Header = () => {
  const date = moment().format("YYYY-MM-DD");
  return (
    <AppHeader>
      <Wrapper>
        <Title>TO DO:</Title>
        <Date>{date}</Date>
      </Wrapper>
    </AppHeader>
  );
};
export default Header;
