import styled from 'styled-components';

export const TodoItem = styled.div`
    text-align: center;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
`;

export const ClickedButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid rgb(62,169,172);
    font-size: 19px;
    color: rgb(62,169,172);
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    margin-left: 15px;
    transition: all 200ms;
    cursor: pointer;
`;

export const RemoveButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid rgb(62,169,172);
    font-size: 20px;
    color: rgb(62,169,172);
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    margin-left: 15px;
    transition: all 200ms;
    cursor: pointer;
`;