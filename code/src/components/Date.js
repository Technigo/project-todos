import React from "react";
import moment from "moment";

import styled from "styled-components";

export const Date = () => {
  // const todos = useSelector(state => state.tasks.taskData.length);
  // const now = new Date();
  const now = moment()
    .format("LL")
    .toString();
  return <Container>Today: {now}</Container>;
};

const Container = styled.div`
  color: white;
  margin: 1.5rem;
  @media (min-width: 900px) {
    margin: 3rem;
  }
`;
