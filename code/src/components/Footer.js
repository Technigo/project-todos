import React from "react"

import { Icon, FooterContainer, FooterText, Image } from "./StyledComponents"

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Developed by: mattsson717
        <Icon href="https://github.com/Mattsson717" target="blank">
          <Image src="images/github-foot.png" alt="github icon" />
        </Icon>
        <Icon href="https://www.linkedin.com/in/patrik-mattsson/" target="blank">
          <Image src="images/linkedin-foot.png" alt="linkedIn icon" />
        </Icon>
        <Icon href="https://patrikmattsson.netlify.app/" target="blank">
          <Image src="images/burger.png" alt="portfolio icon" className="brands"/>
        </Icon>
      </FooterText>
    </FooterContainer>
  )
}
export default Footer
