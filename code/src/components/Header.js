import React from "react"
import styled from "styled-components/macro"

const TitleContainer = styled.div`
    display: flex
    margin: 30px auto 20px 300px
    color: white
    font-weight: bold
    font-size: 48px
`

const Header = () => {
    return(
        <TitleContainer>MY TODOS</TitleContainer>
    )
}

export default Header
