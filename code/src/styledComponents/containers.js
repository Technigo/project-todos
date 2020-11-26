import styled from 'styled-components'

export const MainContainer = styled.main`
  background: white;
  width: 95%;
  padding: 15px;
  border: 2px solid black;
  box-shadow: 0 2px 2px 2px black;
  margin: auto;

  @media (min-width: 667px){
    width: 50%;
    margin-top: 20px;
  }
  @media (min-width: 1024px){
    width: 30%;
  }
`

export const HeaderSection = styled.header`
  background: white;
`

export const TopContainer = styled.section`
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 20px 5px 10px 5px;
  border-bottom: 2px solid black;
` 
export const TodoContainer = styled.div`
  border-bottom: 1px solid black;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 4px;
  padding: 20px;
`

export const FormContainer = styled.section`
  display: flex;
  margin-top: 20px;
  background: white;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  padding-bottom: 20px;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`