import styled from 'styled-components/macro';

export const OuterWrapper = styled.section`
  padding: 2em 0;
  background-color: grey;
  width: 100%;
  height: 100vh;
`;

export const InnerWrapper = styled.div`
  background: white;
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.3), 0 5px 15px rgba(0, 0, 0, 0.5);
  height: fit-content;
  border-radius: 20px;
  padding: 2em;
`;

export const TaskListWrapper = styled.section`
  padding: 2em 0;
`;
