import React, { useState } from 'react'
import { useSelector } from 'react-redux' //because we will have a action
import styled from 'styled-components/macro'
import moment from "moment"
import { ClearButton } from 'components/ClearButton'


export const HeaderTodo = () => {

  const tasks = useSelector(state => state.tasks.tasks)

  return (
    <HeaderWrapper>
      <SubHeader>
        <Heading>TODO LIST</Heading>
        <RegularText>{moment().format("MMMM Do")}</RegularText>
      </SubHeader>
      <SubHeader right>
        <RegularText>{tasks.length} tasks</RegularText>
        <ClearButton />
      </SubHeader>
    </HeaderWrapper>
  )
}




// const HeaderWrapper = styled.div`
//   padding: 20px;
//   font-weight: 700;
//   background: #df993e;
//   color: white;

//     `
// const Heading = styled.p`
//   font-size: 20px;
//   color: white;
// `
// const Date = styled.p`
//   font-size: 20px;
//   margin: 0;
//   color: #EFEBE9;
// `
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85px;
  background: #df993e;
`;

const SubHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: ${props => (props.right ? "flex-end" : "flex-start")};
  margin: ${props =>
    props.right ? "10px 20px 10px 0px" : "10px 0px 10px 20px"};
`;

const Heading = styled.p`
  font-weight: 600;
  margin: 0px 0px 5px 0px;
  color: #343434;
  font-size: 20px;
`;

const RegularText = styled.span`
  margin: 0;
  color: #4a4a4a;
`;

