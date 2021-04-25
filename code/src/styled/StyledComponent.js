import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
`;

export const ItemList = styled.div`
  width: 95%;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.8);
  margin: 8px auto;
  padding: 1px 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: #fff;
`;
export const TaskForm = styled.div`
  width: 95%;
  margin: 8px auto;
  left: 8px;
  bottom: 0;
  position: absolute;
  border-radius: 5px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const Paragraph = styled.p`
  margin-left: 8px;
  color: #fff;
  margin: 5px 0 5px 8px;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 10px;
  color: #fff;
`;
export const AddTaskInput = styled.input`
  width: 80%;
  height: 40px;
  background: transparent;
  border: none;
  padding-left: 8px;
  color: #8b8b8b;
`;
export const SendButton = styled.button`
  background: transparent;
  border: none;
  height: 40px;
  width: 20%;
  flex: 1;
  outline: none;
`;
export const CompleteTask = styled.input`
  background: transparent;
  border: none;
  height: 25px;
  width: 20%;
  flex: 1;
`;
export const OptionsContainer = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListWapper = styled.div`
  width: 100%;
  padding-bottom: 60px;
`;

export const ParagraphWrapper = styled.div`
  height: 100%;
  width: 80%;
`;

export const EmptyListImage = styled.img`
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;
