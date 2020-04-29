import styled from 'styled-components';

export const OuterContainer = styled.main`
  width: 80%;
  margin: 0px auto;

  @media (min-width: 430px) {
    width: 90%;
  }
`
export const ProjectCard = styled.section`
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
`
export const ProjectImageContainer = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
`
export const ProjectForm = styled.form`
  max-width: 256px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin: 40px auto 20px auto;
  border-bottom: 2px solid #f4f7f7;
  padding-bottom: 10px;

  @media (min-width: 374px) {
    max-width: 300px;
  }
  @media (min-width: 424px) {
    max-width: 340px;
  }
`
export const ProjectInput = styled.input`
  border: none;
  width: 216px;
  background-color: #1f4e5f;
  font-size: 25px;
  color: #f4f7f7;

  @media (min-width: 374px) {
    width: 260px;
  }
  @media (min-width: 424px) {
    width: 300px;
  }  
`
export const TodoLists = styled.section`
  background-color: #f4f7f7;
  border-radius: 12px;
  margin-bottom: 20px;
  width: 340px;

  @media (min-width: 526px) {
    margin: 20px 20px 20px 20px
  }
`
export const HeaderContainer = styled.section`
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  background-color: rgba(169, 207, 208, 0.3);
  padding: 20px;
  border-radius: 12px 12px 0px 0px;
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
  padding: 15px;
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
  margin-bottom: 5px;
`
