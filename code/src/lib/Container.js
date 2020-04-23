import styled from 'styled-components'

export const SummaryContainer = styled.section`
    padding: 8px;
    font-size: smaller;
    color: rgb(112, 112, 112);
    border: none;
    background: ${(props) => props.background || '#fff'};
    padding: 14px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 90%;
  `
export const CheckSection = styled.section `
    margin: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 24px;
    flex-wrap:wrap;
`