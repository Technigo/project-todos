import React from 'react'
import penguin_2 from '../penguin_2.svg'
import Today from './Today'
import StartBtn from './StartBtn'
import { 
    StyledSection, 
    StyledHeader, 
    StyledImg, 
    Styledp, 
    StyledDiv, 
    StyledDiv2,
    StyledH2 } from 'styling/Styling'


const startPage = () => {
    
    return (
        <>
            <StyledSection className='startpage'>
                <StyledHeader>
                    <StyledImg src={penguin_2} className='start-penguin'/>
                    <Today />
                </StyledHeader>
                <StyledDiv>
                    <Styledp>"A goal without a plan is just a wish" - Plan away!</Styledp>
                </StyledDiv>
            </StyledSection>
            <StyledDiv2>
                <StyledH2>Create some todos</StyledH2> 
                <StartBtn />
            </StyledDiv2>
        </>
    )
}


export default startPage
