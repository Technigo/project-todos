import styled from 'styled-components';

export const TrashBin = styled.img `
  width: 20px;
  
  @media (min-width: 668px) {
    width: 35px;
  }
`;

export const PlusIcon = styled.img `
  height: 50px;

  @media (min-width: 668px) {
    height: 80px;
  }
`;

export const BackArrow = styled(PlusIcon) `
  width: 100%;
  max-width: 70px;
`;