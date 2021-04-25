import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { DeleteButton } from "./DeleteButton";
import { todos } from "../reducers/todos";


export const TodoItem =({ todo }) => {
    const dispatch = useDispatch()

    return (
        <Main>
            <TodoContainer>
                <div
                    type="checkbox"
                    checked={todo.isComplete}
                    onClick={() => dispatch(todos.actions.toggleComplete(todo.id))}
                    >{todo.isComplete ? "✔️" : "🔘"}
                </div>
                <TodoText>{todo.text}</TodoText>
                <DeleteButton todo={todo} />
            </TodoContainer> 
            <InfoTextContainer>
                <Time>Added: {moment(todo.createdAt).fromNow()}</Time>
                <Span>This task is: {todo.isComplete ? "Completed" : "Incompleted"}</Span>
            </InfoTextContainer>
        </Main>
    )
}
const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const TodoContainer = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const TodoText = styled.p`
    width: 100%;
    margin: 5px;
    padding-left: 10px;
`;
const InfoTextContainer = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    justify-content: space-between;
    border-bottom: 1px solid #474747;
    padding-bottom: 5px;
`;


const Time = styled.p`
    font-size: 10px;
    color: #BDBDBD;
    padding-top: 7px;
    margin-right: 10px;
        @media (min-width: 768px) {
        font-size: 12px;
        padding-top: 5px;
    }
`;

const Span = styled.p`
    font-size: 10px;
    color: #BDBDBD;
    padding-top: 7px;
        @media (min-width: 768px) {
        font-size: 12px;
        padding-top: 5px;
    }
`;
