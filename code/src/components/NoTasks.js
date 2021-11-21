import React from "react";
import styled from 'styled-components/macro'

const EmptyContainer = styled.div`
    font-size: 30px;
    display: flex;
    color: white;
    margin-top: 10px;
    width: 100%;
    background-color: rgba(245, 245, 245, 0.622);
    border-radius: 25px 25px 10px 10px;
    @media (min-width: 768px) {
    max-width: 80%;
    }
    @media (min-width: 992px) {
    max-width: 60%;
    max-height: 400px;
    }
`
const EmptyCard = styled.div`
    background-color: rgba(245, 245, 245, 0.622);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 0;
    border-radius: 25px 25px 10px 10px;
`
const EmptyText = styled.p`
    justify-content: center;
    margin: 5px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    color: #768eb0;
    font-family: 'Marcellus SC', serif;
    @media (min-width: 768px) {
    font-size: 23px;
    }
`
const Gif = styled.img`
    width: 90%;
    @media (min-width: 768px) {
    max-width: 400px;
    }
    @media (min-width: 992px) {
        max-width: 300px;
        max-height: 300px;
    }
    
`
const Main = styled.div`
    background-color: rgba(245, 245, 245, 0.622);
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 0px 15px 15px 15px;
    border-radius: 0px 0px 25px 25px;
    border: none;
`
const NoTasks = () => {
    return (
        <Main>
            <EmptyContainer>
                <EmptyCard>
                    <EmptyText>There is nothing left to do!</EmptyText>
                    <EmptyText>You deserve some rest</EmptyText>
                    <Gif src="https://media3.giphy.com/media/LpWSbJeDMVhzv3EYxF/giphy.gif?cid=ecf05e47x81zoce6rtdgs514eknj54w21ngffis5x731o42r&rid=giphy.gif&ct=g" alt="mushroom-resting" />
                </EmptyCard>
            </EmptyContainer>
        </Main>
    )
}

export default NoTasks