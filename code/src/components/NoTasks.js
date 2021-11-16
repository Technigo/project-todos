import React from "react";
import styled from "styled-components";

const EmptyContainer = styled.div`
    font-size: 30px;
    display: flex;
    color: white;
    margin-top: 30px;
    width: 90%;
    background-color: #768eb0;
`
const EmptyCard = styled.div`
    background-color: whitesmoke;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 0;
    background-color: #768eb0;
`
const EmptyText = styled.p`
    justify-content: center;
    margin: 5px;
    font-size: 15px;
`
const Gif = styled.img`
    width: 100%;
`
const NoTasks = () => {
    return (
        <EmptyContainer>
            <EmptyCard>
                <EmptyText>There is nothing left to do!</EmptyText>
                <EmptyText>You deserve some rest.</EmptyText>
                <Gif src="https://media3.giphy.com/media/LpWSbJeDMVhzv3EYxF/giphy.gif?cid=ecf05e47x81zoce6rtdgs514eknj54w21ngffis5x731o42r&rid=giphy.gif&ct=g" alt="mushroom-resting" />
            </EmptyCard>
        </EmptyContainer>
    )
}

export default NoTasks