import styled from 'styled-components';

export const StyledAddTodoButton = styled.button`
  align-items: center;
  background-color: #ffde53;
  border: 1.5px solid #111;
  border-radius: 25%;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter, sans-serif;
  font-size: 30px;
  height: 48px;
  width: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:after {
    background-color: #111;
    border-radius: 25%;
    content: '';
    display: block;
    height: 48px;
    width: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(4px, 4px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }
  &:hover:after {
    transform: translate(0, 0);
  }
  &:active {
    background-color: #ffdeda;
    outline: 0;
  }
  &hover {
    outline: 0;
  }
`;

export const StyledDeleteButton = styled.button`
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter, sans-serif;
  font-size: 14px;
  height: 30px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 8px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:after {
    background-color: #111;
    border-radius: 8px;
    content: '';
    display: block;
    height: 30px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(4px, 4px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }
  &:hover:after {
    transform: translate(0, 0);
  }
  &:active {
    background-color: #ffdeda;
    outline: 0;
  }
  &hover {
    outline: 0;
  }
`;
