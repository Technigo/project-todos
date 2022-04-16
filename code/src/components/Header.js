import React from 'react'
import Logo from '../assets/logo.svg'
import { HeaderContainer } from '../components/Styling'

const Header = () => {
	return (
		<HeaderContainer>
			<img src={Logo} alt='logotype'></img>
			<h1>What’s next to do?</h1>
		</HeaderContainer>
	)
}

export default Header
