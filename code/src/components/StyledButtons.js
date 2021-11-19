import styled from 'styled-components';

export const StyledAddTodoButton = styled.button`
  background-color: #ffde53;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  &:hover {
    cursor: pointer;
  }
  .button-text {
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledDeleteButton = styled.button`
  background-color: #f5f9fa;
  border: 2px solid #6577ae;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  .button-text {
    height: 20px;
    width: 20px;
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
