import styled from "styled-components";
import breakpoints from "./Breakpoints";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const TodoListContainer = styled.ul`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and ${breakpoints.device.computer} {
    margin-top: 50px;
  }
`;
export const ListItem = styled.li`
  width: 92%;
  align-self: flex-start;
  padding: 8px;
  margin: 8px;
  font-size: 32px;
  color: #3f3f3f;
  list-style: none;
  display: flex;
  align-content: flex-start;
  justify-content: space-between;
  border-bottom: 2px dotted #bdb9b9;
  @media only screen and ${breakpoints.device.computer} {
    width: 85%;
    align-self: center;
    font-size: 24px;
    margin: 4px;
    padding: 4px;
  }
`;

export const TimeText = styled.div`
  width: 40px;
  align-self: flex-start;
  color: #757575;
  font-size: 12px;
  text-align: center;
`;
export const ButtonWrapper = styled.div`
  margin-right: 6px;
`;
export const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 20px;
  @media only screen and ${breakpoints.device.computer} {
    padding-bottom: 10px;
  }
`;
export const Title = styled.h3`
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 18px;
  text-align: left;
`;
export const ItemText = styled.p`
  font-size: 14px;
  text-align: left;
  margin: 0;
  padding-top: 14px;
`;
