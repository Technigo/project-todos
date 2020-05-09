import styled from 'styled-components'

export const TopContainer = styled.div`
  width: 100%;
  border-bottom: 3px solid #f0f0f0;
  padding: 16px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: beige;
  font-size: 20px;
  color: #a3a3a3;
`
export const ListContainer = styled.div`
  width: 100%;
  border-bottom: 3px solid #f0f0f0;
  padding: 16px;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: beige;
  font-size: 16px;
  color: #a3a3a3;

  &:hover {
    cursor: pointer;
  }
`
export const DetailContainer = styled.div`
  width: 100%;
  border-bottom: 3px solid #f0f0f0;
  padding: 16px 0px 16px 25px;  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  background-color: #FCFCFC;
  font-size: 16px;
  color: #a3a3a3;
`
export const FormContainer = styled.div`
  width: 100%;
  border-bottom: 3px solid #f0f0f0;
  padding: 16px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: beige;
  font-size: 16px;
  color: #a3a3a3;
`
export const AddTaskContainer = styled.div`
  width: 100%;
  border-bottom: 3px solid #f0f0f0;
  padding: 16px;  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: beige;
  font-size: 16px;
  color: #a3a3a3;
`