import styled from "styled-components";

export const OuterSection = styled.div`
  @media (min-width: 992px) {
    display: flex;
    width: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 280px;

  @media (min-width: 768px) {
    width: 500px;
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    width: 900px;
  }
`;

export const StyledButton = styled.button`
  width: 30px;
  border: none;
  background-color: white;

  @media (min-width: 768px) {
    width: 50px;
  }
`;
