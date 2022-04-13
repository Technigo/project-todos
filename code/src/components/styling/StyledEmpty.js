import styled from 'styled-components/macro'

export const EmptySection =styled.section`
display: flex;
flex-direction: column;
max-width: 600px;
margin: 10px 20px;
padding: 10px;
/* border: 2px solid red; */
/* border-radius: 5px; */
background: #fff;
text-align: center;
font-size: 2rem;;

& p {
  text-align: center;
  font-size: 1rem;;
}
`
export const EmptyIconsBox = styled.div`
display: flex;
justify-content: space-between;
font-size: 2rem;;
`