import styled from 'styled-components';

export const Article = styled.article`
    display: flex;
    align-items: center;
    justfiy-content: center;
    margin-bottom: 5px;
    background: rgba(255, 255, 255, .8);
    min-width: 100%;
`;

export const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    min-width: 290px;
`;

export const CheckboxTextContainer = styled.div`
    display: flex;
    align-items: center;   
    margin: 20px;
    width: 190px;
`;

export const TaskText = styled.p`
    margin-left: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
    color: rgb(36, 90, 92);
    word-wrap: break-word;
    align-self: flex-start;
`;

export const ButtonContainer = styled.div`
    align-self: flex-right;
    background-colour: blue;
    padding: 10px;
`;

export const RemoveButton = styled.button`
    background-color: rgb(252, 228, 215);
    border: none;
    font-size: 15px;
    padding: 7px;
    font-family: 'Open Sans', sans-serif;
    color: rgb(36, 90, 92);
    cursor: pointer;
`;
