import styled from "styled-components";

export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  border-bottom: 1px solid #050505;
`;

export const TextDeleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconBox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckDeleteBox = styled.div`
  display: flex;`

export const TextDateBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
`;

export const TaskText = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  word-break: break-all;
`;

export const DateBox = styled.div`
  display: flex;
  margin-top: 3px;
`;

export const DateText = styled.p`
  font-size: 11px;
  font-family: ${props => props.theme.fontFamily};
  margin: 0 7px 0 0;
  display: flex;
  align-items: center;
`;

export const DateTextDue = styled(DateText)`
  ${props =>
    props.due ?
    `
    color: black;
    `:  `
    color: red;
  `};
`;

export const BoldText = styled.span`
  font-weight: bold;
  margin: 0 3px 0 0;
`;