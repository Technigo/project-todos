import styled from 'styled-components';

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    background: rgba(255, 255, 255, .8);
    min-width: 100%;
`;

export const TaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 225px;
    margin: 0;
`;

export const CheckboxTextContainer = styled.div`
    display: flex;
    align-items: center;   
    margin: 10px 10px 0 5px;
`;

export const TaskText = styled.p`
    margin-left: 20px;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: rgb(36, 90, 92);
    word-wrap: break-word;
`;

export const ButtonContainer = styled.div`
    align-self: flex-right;
    margin-left: 25px;
`;

export const ClearButton = styled.button`
    background-color: rgb(249, 207, 185);
    border: none;
    font-size: 15px;
    padding: 15px 7px;
    font-family: 'Open Sans', sans-serif;
    color: rgb(36, 90, 92);
    cursor: pointer;
    transition: all 150ms;
    border-radius: 3px;
    &:hover {
            background: rgb(252, 228, 215);
        }
`;

export const TimeStampContainer = styled.div`
    margin: 0 0 10px 5px;
`;

export const TimeText = styled.p`
    font-size: 13px;
    padding: 0 7px  0 0;
    color: rgb(152, 159, 122);
    font-family: 'Open Sans', sans-serif;
    font-style: italic;
    font-weight: 600;
    border-radius: 3px;
    margin: 0;
    text-decoration: underline;
`;
