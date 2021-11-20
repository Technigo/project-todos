import React from 'react'
import penguin_2 from '../penguin_2.svg'
import wenotme from '../we_not_me.svg'
import styled from 'styled-components'
import Today from './Today'
// import TodoList from './TodoList'
import StartBtn from './StartBtn'


const StyledSection = styled.main`
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin-right: 1rem;
  margin-left: 1rem;
`

// const StyledButton = styled.button`
//     background-color: #333;
//     color: #80B477;
//     border: none;
//     border-radius: 50%;
//     width: 72px;
//     height: 72px;
//     cursor: pointer;
// `

// const StyledDiv = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding: 2rem;
//     align-items: center;
//     margin-bottom: 1rem;
//     background-color: #222;
//     border-radius: 8px;
//     box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
// `

const StyledDiv2 = styled.div`
    max-width: 767px;  
    margin: 0 auto; 
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
`

const StyledDiv3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #222;
    border-radius: 8px;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-bottom: rem;
    margin-top: -200px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 10px -7px;
`

const StyledH2 = styled.h2`
    margin-right: 1rem;
    font-size: 40px;
    line-height: 42px;
    font-weight: 500;
    max-width: 150px;
    color: #dedede;
`

const Styledp = styled.p`
    font-size: 1.125rem;
    font-weight: 500;
    color: #dedede;
    text-align: center;
    margin: 2rem 1rem 0 1rem;

`

const StyledImg = styled.img`
    width: 72px;
    background-color: #333;
    padding: 1rem;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 10px -7px;
    margin-bottom: 0;
`

// const StyledImg2 = styled.img`
//     width: 170px;
//     z-indez: 1;
// `

const StyledHeader = styled.header`
    padding: 3rem 1rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`


const startPage = () => {

    return (
        <StyledSection className='startpage'>
              <StyledDiv3>
                    <StyledImg src={penguin_2} className='start-penguin'/>
                    <Styledp>"A goal without a plan is just a wish" - Plan away!</Styledp>

                    {/* <StyledImg2 src={wenotme} className='start-quote'/> */}
                </StyledDiv3>
            <StyledHeader>
                <Today />

            </StyledHeader>
            {/* <StyledDiv> */}
            {/* </StyledDiv> */}
            <StyledDiv2>
                <StyledH2>Create some todos</StyledH2>
                <StartBtn />
                {/* <Link to={'TodoList'}>
                <StyledButton className='pulse'>
                        <i className="fas fa-plus"></i>
                </StyledButton>
                </Link> */}
            </StyledDiv2>
        </StyledSection>
    )
}


export default startPage
