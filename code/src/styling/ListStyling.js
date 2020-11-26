import styled from 'styled-components'


export const ListContainer = styled.ul`
  display:flex;
  width:100%;
  flex-direction: column;
  padding:0;
`

export const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

`

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  width:70%;
  margin-bottom:30px;

  @media (min-width: 700px) {
    width: 20%;
  }
`

export const Text = styled.p`
  font-weight: 600;
`