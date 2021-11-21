import React from 'react'
import penguin_2 from '../penguin_2.svg'
// import wenotme from '../we_not_me.svg'
import styled from 'styled-components'
import Today from './Today'
import StartBtn from './StartBtn'


const StyledSection = styled.main`
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 1rem;
  margin-left: 1rem;
`

const StyledDiv2 = styled.div`
    max-width: 767px;  
    margin: 0 auto; 
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    position: fixed;
    bottom: 2rem;
    left: 1rem;
    right: 1rem;

    @media (min-width: 767px) {
        bottom: 8rem;
     }

`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
`

const StyledH2 = styled.h2`
    margin-right: 1rem;
    font-size: 2rem;
    line-height: 2.3rem;
    font-weight: 500;
    max-width: 150px;
    color: #dedede;

    @media (min-width: 767px) {
       font-size: 3rem;
       line-height: 3.2rem;
       max-width: 200px;
    }
`

const Styledp = styled.p`
    font-size: 2rem;
    font-weight: 500;
    color: #dedede;
    text-align: center;
    margin: 2rem 1rem 0 1rem;

    @media (min-width: 767px) {
        font-size: 3rem;
    }

`

const StyledImg = styled.img`
    width: 72px;
    background-color: #333;
    padding: 1rem;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 10px -7px;
    margin-bottom: 1rem;

    @media (min-width: 767px) {
        width: 112px;
    }
`

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;

    @media (min-width: 767px) {
        padding-top: 8rem;
    }
`


const startPage = () => {
    
    return (
        <>
            <StyledSection className='startpage'>
                {/* <StyledImg2 src={wenotme} className='start-quote'/> */}
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
