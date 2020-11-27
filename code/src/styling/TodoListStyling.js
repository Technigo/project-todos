import styled from 'styled-components';

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;

    @media (min-width: 768px) {
        justify-content: center;
    }
`;

export const SummaryContainer =styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
    align-items: center;
    }
`;

export const Summary = styled.p`
    font-size: 20px;
    color: white;
    font-weight: bold;
`;

export const RemoveAllButton = styled.button`
    font-size: 15px;
    width: 90px;
    height: 30px;
    border: 1px solid black;
    padding: 3px;
    background-color: yellow;
    color: red;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 150px;
        height: 50px;
    }
`;