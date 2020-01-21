import styled from "styled-components";

export const TodoContainer = styled.div`
  max-width: 320px;
  width: 100vw;
  max-height: 570px;
  height: 100vh;
  margin: 0 auto;
`;

export const ListWrapper = styled.div`
  background-color: #ebecf0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  min-height: 490px;
  max-height: 550px;
  overflow: scroll;
`;

export const HeaderWrapper = styled.div`
  height: 1em;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  background: #f4f4f4;
  border-bottom: 2px solid #d6d5d5;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ToggleAddTodo = styled.div`
  padding: 1.2rem;
  margin-bottom: 0.6rem;
  border-bottom: 2px solid #d6d5d5;
  transition: background 0.25s;
  cursor: pointer;
  &:hover {
    background: #d7dae5;
  }
`;

export const AddTodoButton = styled.input`
  background-color: #5aac44;
  box-shadow: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  line-height: 20px;
  margin: 8px 4px 0 0;
  padding: 2px 12px;
  text-align: center;
  border-radius: 3px;
  align-self: flex-start;
  box-shadow: 0px 2px 6px 0px rgb(204, 202, 204);
  &:hover {
    background-color: #50a040;
    color: white;
  }
`;

export const ListItem = styled.li`
  background: #fff;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 2px;
  box-shadow: 0px 2px 6px 0px rgb(204, 202, 204);
  display: flex;
  justify-content: space-between;
`;

export const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

export const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
