import styled from 'styled-components';

export const ItemList = styled.li`
    font-size: 25px;
    color: black;
    background-color: pink;
    align-self: flex-start;
    padding: 10px;
    width: 75%;
    margin: 5px;
    display: flex;
    justify-content: space-between;

    @media (min-width: 768px) {
        margin-left: 11%;
    }
`;

export const RemoveItemButton = styled.button`
    margin: 5px;
    border: none;
    padding: 0;
    cursor: pointer;
`;