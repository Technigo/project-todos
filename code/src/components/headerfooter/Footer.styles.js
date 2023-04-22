import styled from 'styled-components';

export const FooterStyles = styled.footer`
    margin-top: 15px;
    padding: 15px;
    background-color: rgb(245, 245, 245, .5);
    display: flex;
    flex-direction: column;
    align-items: center;
  
  p {
    text-align: center;
    font-family: 'Yeseva One', cursive;
    color: #4e54c8;
    margin: 0;
  }

  a {
    color: #4e54c8;
  }

  a:visited {
    color: #4e54c8
  }

  img, .contact-logo {
    width: 30px;
    height: 30px;
    object-fit: cover;
    opacity: .75;
    color: #4e54c8;
  }

  img:hover, .contact-logo:hover {
    transform: scale(1.2);
    opacity: 1;
  }
  `
export const ContactMeStyles = styled.div`
    display: flex;
    gap: 7px;
    padding: 5px;
  `