import styled from 'styled-components';
// I could probably fix more with the styling but not sure where at the moment.

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
`;

export const FooterText = styled.p`
   display: flex;
   flex-direction: row;
   color: white;
`;

export const FooterLinkWrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   margin-right: 1rem;
`;

export const FooterLinkBox = styled.div`
   display: flex;
   flex-direction: column;
   margin: 10px;
`;