import styled from 'styled-components';

export const InputContainer = styled.form`
    display: flex;
    width: 100%;
    margin-left: 35px;
    margin-right: 10px;

    @media (min-width: 768px) {
        justify-content: center;
    }
`;

export const AddItemButton = styled.button`
    color: gray;
    width: 10%;
    height: 50px;
    margin-top: 5.4px;
    cursor: pointer;
`;

export const ItemInput = styled.input`
    height: 25px;
    padding: 10px;
    margin: 5px; 
    font-size: 20px;
    width: 65%;
`;