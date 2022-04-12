import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'

const HeaderContainer = styled.header`
	background: var(--clr-main);
	color: var(--clr-secondary);
	display: flex;
	justify-content: center;
`

const Header = () => {
	return (
		<HeaderContainer>
			<img src={Logo} alt='logotype'></img>
			<h1>What’s next to do?</h1>
		</HeaderContainer>
	)
}

export default Header
