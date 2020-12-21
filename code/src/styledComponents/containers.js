import styled from 'styled-components'

export const MainContainer = styled.main`
  background: #293a80;
  width: 95%;
  padding: 15px;
  border: 2px solid #010038;
  box-shadow: 0 3px 2px 2px #010038;
  margin: auto;
  color: white;

  @media (min-width: 667px){
    width: 50%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (min-width: 1024px){
    width: 30%;
  }
`

export const HeaderSection = styled.header`
  background: #293a80;
`

export const TopContainer = styled.section`
  background: #293a80;
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 10px 5px;
  border-bottom: 2px solid #f39422;
  border-top: 2px solid #f39422;
` 
export const TodoContainer = styled.div`
  background: #537ec5;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 4px;
  padding: 20px;
  box-shadow: 0 3px 2px 2px #010038;
  word-wrap: break-word;
`

export const FormContainer = styled.section`
  background: #293a80;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  border-bottom: 2px solid #f39422;
  margin-bottom: 20px;
`
export const Wrapper = styled.div`
  background: #293a80;
  display: flex;
  align-items: center;
`
export const EmptyListContainer = styled(TodoContainer)`
  border: 5px #f39422 solid;
  font-weight: bold;
  justify-content: center;
  margin: 20px auto 20px;
  background: #537ec5;
`