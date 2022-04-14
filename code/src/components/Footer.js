import React from 'react'
import styled from 'styled-components'


//styled components

const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
    }

const Container = styled.div`
width: 375px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
font-size: 16px;
margin-top: 2rem;
line-height: 0;

@media ${devices.tablet} {
    width: 768px;
    
}

@media ${devices.desktop} {
    width: 1025px;
}
`

const Link = styled.a`
text-decoration: none;
color: #b51918;
`

const Footer = () => {

return (


<Container>
<p> Made with 
<span role="img" aria-label="heart emoji"> &nbsp;❤️ &nbsp;</span> 
by <Link href="https://github.com/emmajosefina/" target="_blank" rel="noopener noreferrer">Emma</Link>
</p>
<p>Technigo Bootcamp</p>
       <p>Todo App Project</p>
   

</Container>
)

}

export default Footer