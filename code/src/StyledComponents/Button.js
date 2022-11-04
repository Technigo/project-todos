import styled from 'styled-components';

export const AddButton = styled.button`
    text-decoration: none;
    border: 2px solid lightgray;
    margin: 5px;
    color: transparent;
    padding: 20px 40px;
    font-size: 5px;
    font-family: sans-serif;
    letter-spacing: 2px;
    transition: all 0.5s;
    position: relative;
    border-radius: 0 20px 20px;
  &:before {
    content: "Add";
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #001219;
    font-size: 28px;
    top: 0;
    left: 100%;
    font-family: sans-serif;
    letter-spacing: 5px;
    transition: all 1s;
    height: 100%;
    width: 100%;
    position: absolute;
    transform: scale(0) rotatey(0);
    opacity: 0;
    border-radius: 0 20px 20px;
}
  &:hover:before {
    transform: scale(1) rotatey(360deg);
    left: 0;
    opacity: 1;
}
  &:after {
    content: "Todo";
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #001219;
    font-size: 28px;
    top: 0;
    left: 0;
    font-family: sans-serif;
    letter-spacing: 5px;
    transition: all 1s;
    height: 100%;
    width: 100%;
    position: absolute;
    transform: scale(1) rotatey(0);
    opacity: 1;
    border-radius: 0 20px 20px;
}
  &:hover:after {
    transform: scale(0) rotatey(360deg);
    left: -100%;
    opacity: 0;
}
    `;

export const DeleteButton = styled.button`

`