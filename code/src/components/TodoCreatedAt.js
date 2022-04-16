import React from "react";
import styled from 'styled-components';
import { format } from 'date-fns';

const CreatedAtText = styled.p `
    margin: 0;
    padding: 0;
`

const TodoCreatedAt = ({ createdAt }) => {
    return (
        <CreatedAtText>Added {format(createdAt, 'yyyy-MM-dd hh:mm')}</CreatedAtText>
    );
}

export default TodoCreatedAt;