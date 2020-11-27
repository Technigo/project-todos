import styled from 'styled-components';

export const Title = styled.h1 `
  font-size: 32px;
  color: #fff;

  @media (min-width: 668px) {
    font-size: 40px;
  }
`;

export const SubTitle = styled.h2 `
  font-size: 24px;
  text-align: center;
  color: #fff;
  font-weight: 200;
  
  @media (min-width: 668px) {
    font-size: 30px;
  }
`;

export const Label = styled.label `
  font-size: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    font-size: 26px;
  }
`;

export const Paragraph = styled.p `
  color: #fff;
  font-size: 20px;

  @media (min-width: 668px) {
    font-size: 26px;
  }
`;

export const ParagraphBlack = styled(Paragraph)`
  color: #000;
  text-align: center
`;

export const Span = styled.span`
  font-weight: bold;
`;