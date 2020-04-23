import React from "react"
import styled from "styled-components"

export const EmptyDisplay = () => {

    const EmptySection = styled.div`
    width: 100%;
    height: 50vh;
    background-color: #eae3e3;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
`

    const EmptyMessage = styled.h1`
    font-size: 30px;
`

    const EmptyImage = styled.img`
    width: 200px;
    height: 200px;
`


    return (
        <EmptySection>
            <EmptyImage src={require('../Assets/emptyFolder.png')} />
            <EmptyMessage>This folder is empty!</EmptyMessage>
        </EmptySection>
    )
}