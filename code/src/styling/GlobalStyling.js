import styled from 'styled-components';

export const CategoryImage = styled.img`
  width: 100px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px 50px;
`;

export const MainWrapper = styled.div`
  margin: 20px 50px;
`;

export const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #e7e7e7;
  &:last-child {
    border-bottom: none;
  }
`;

export const TaskDragImage = styled.img`
  width: 20px;
`;
