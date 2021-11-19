import styled from 'styled-components';

export const StyledAddTodoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffde53;
  color: #515214e3;
  font-size: 30px;
  font-weight: 500;
  border-radius: 50%;
  overflow: hidden;
  transition: 0.4s;
  border: 0px;
  width: 60px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }
  .button-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffde53;
  border-radius: 50%;
  overflow: hidden;
  transition: 0.4s;
  border: 0px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  &:hover {
    cursor: pointer;
  }

  .button-text {
    color: #515214e3;
    font-size: 30px;
    font-weight: 500;
    justify-content: center;
    align-items: center;
  }
`;

export const CheckAllButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffde53;
  color: #515214e3;
  font-size: 14px;
  font-weight: 500;
  border-radius: 25px;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  transition: 0.4s;
  border: 0px;
  width: 100px;
  height: 50px;
  line-height: 50px;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
  &.no-items {
    display: none;
  }
`;
