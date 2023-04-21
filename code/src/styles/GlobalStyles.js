import styled from 'styled-components'

export const OuterWrapper = styled.section`
background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,0.30575980392156865) 100%);
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
`
export const Container = styled.div`
background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,0.2329306722689075) 0%, rgba(252,70,107,0.30575980392156865) 100%);
box-shadow: 0 15px 35px rgba(50,50,93,.3), 0 5px 15px rgba(0,0,0,0.5);
width: 100vw;
min-height: 70%;
height: fit-content;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
margin: 2.5em;
padding: 2em;
@media (min-width: 667px) and (max-width: 1024px)  {
width: 60vw;
min-height: 60%;
}
@media screen and (min-width: 1024px) {
width: 30vw;
min-height: 50%;
}
`