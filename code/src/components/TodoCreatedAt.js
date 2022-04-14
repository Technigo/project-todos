import React from "react";
import styled from 'styled-components';
import { format } from 'date-fns';

const createdAtText = styled.p `
    margin: 0;
    padding: 0;
`

const TodoCreatedAt = ({ createdAt }) => {
    return (
        <createdAtText>Added {format(createdAt, 'yyyy-MM-dd hh:mm')}</createdAtText>
    );
}

export default TodoCreatedAt;