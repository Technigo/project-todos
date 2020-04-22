import styled from 'styled-components';

export const OuterContainer = styled.main`
  width: 80%;
  margin: 0px auto;
`
export const ProjectForm = styled.form`
  max-width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px 0px 20px 0px;
`
export const ProjectInput = styled.input`
  border: none;
  border-bottom: 2px solid #f4f7f7;
  background-color: #1f4e5f;
  font-size: 20px;
  color: #f4f7f7;
`
export const TodoLists = styled.section`
  background-color: #f4f7f7;
  margin-bottom: 20px;
`
export const HeaderContainer = styled.section`
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  background-color: rgba(169, 207, 208, 0.3);
  padding: 20px;
`
export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const TodoForm = styled.form`
  display: flex;
  justify-content: space-around;
  padding: 20px; 
`
export const TodoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TodoInput = styled.input`
  border: none;
  border-bottom: 2px solid #aacfd0;
  background-color: #f4f7f7;
  font-size: 16px;
  color: #79a8a9;
`
export const SummaryContainer = styled.section`
  display: flex;
  flex-direction: column;
`
export const TodoItems = styled.section`
  display: flex;
  align-items: center;
  padding: 20px;
  border-top: 2px solid rgba(169, 207, 208, 0.3);
`
export const TodoItemContainer = styled.div`
  width: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`
export const TodoItemContent = styled.div`
  width: 100%;
  display: flex;
  font-size: 20px;
  flex-direction: row;
  justify-content: space-between;  
`