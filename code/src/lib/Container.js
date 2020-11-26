import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.background || 'papayawhip'};
  margin: 0;
  padding: 0;
`

export const SummaryContainer = styled.div`
  background: ${(props) => props.background || 'papayawhip'};
  padding: 0 16px;
  border-radius: 4px;
  flex-wrap: nowrap;

  @media (min-width: 500px) {
    padding: 0 45px;
  }
`

export const TaskContainer = styled.div`
  margin-bottom: 3px;
  background: #cce5ff;
  ${'' /* border: 2px solid navy; */}
  border-radius: 4px;
  display: flex;
  flex-flow: row nowrap;
  ${'' /* justify-content: space-between; */}
  align-items: center;

`

// check breakpoints
// also found in: text, icon