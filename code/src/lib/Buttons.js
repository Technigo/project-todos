import styled from "styled-components";

export const Button = styled.button`
  background: none;
  height: 30px;
  width: 110px;
  margin-bottom: 10px;
  color: #000;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 3px 3px 6px #c0c0c0, -3px -3px 6px #e6e6e6;
  transition: 0.1s;

  &:hover {
    background: #d3d3d3;
    box-shadow: inset 3px 3px 6px #c0c0c0, inset -3px -3px 6px #e6e6e6;
    color: #808080;
    transition: 0.1s;
  }
`;

export const BinButton = styled.button`
  background: none;
  margin-right: 10px;
  height: 24px;
  width: 24px;
  outline: none;
  background-image: url(../assets/bin.svg);
  border: none;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: 0.1s;
`;

export const CircleButton = styled.button`
  flex: none;
  background: #d3d3d3;
  box-shadow: 3px 3px 5px #bebebe, -3px -3px 5px #e8e8e8;
  height: 24px;
  width: 24px;
  padding: 0;
  border-radius: 50%;
  border: none;
  background-image: url(../assets/plus-.svg);
  background-repeat: no-repeat;
  background-position: center;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #d3d3d3;
    box-shadow: inset 3px 3px 6px #c0c0c0, inset -3px -3px 6px #e6e6e6;
    background-image: url(../assets/plus-.svg);
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.1s;
  }

  margin: ${(props) => (props.right ? "0 10px 0 0" : "0 10px 0 20px")};
`;
