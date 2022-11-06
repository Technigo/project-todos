import styled from 'styled-components/macro'

// ---------- Wrappers & Containers -------

export const AppWrapper = styled.div`
  width: 350px;
  margin: 3em 0 4em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (min-width: 667px) {
    width: 500px;
    }
`;

// -----------------

export const HeaderContainer = styled.header`
  background: var(--clr-secondary);
  color: var(--clr-main);
  border-top-left-radius: 5px; 
  border-top-right-radius: 5px;
  border: 2px solid var(--clr-grey);
  border-bottom: none;
  box-shadow: 
  2px 2px 1px var(--clr-darkgrey),
  3px 3px 1px var(--clr-grey),
  5px 5px 2px var(--clr-main),  
  7px 7px 2px var(--clr-darkgrey),
  8px 10px 8px var(--clr-main); 
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 2em;
`;

// -----------------

export const OuterWrapper = styled.section`
  background: var(--clr-secondary);
  color: var(--clr-main);
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 2px solid var(--clr-grey);
  box-shadow: 
  2px 2px 1px var(--clr-darkgrey),
  3px 3px 1px var(--clr-grey),
  5px 5px 2px var(--clr-main),  
  7px 7px 2px var(--clr-darkgrey),
  8px 10px 8px var(--clr-main); 
  border-top: none;
`;

// ----------- Buttons & Img ---------

export const StartBtn = styled.button`
  position: relative;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const AddStartIcon = styled.img`
  border: 2px solid black;
  border-radius: 10px;
  padding: 1em 1em 1em 0.4em;
  width: 120px;

  &:hover {
    transform: scale(1.3);
    transition: all 0.45s ease-in;
   }
`;

// -----------------

export const AddBtn = styled.button`
  background: transparent;
  padding: 0;
  border: none;
  position: absolute;
  top: 3px;
  right: 5px;
  cursor: pointer;
`;

export const AddCheck = styled.img`
  color: none;
  width: 45px;

  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in;
  }
`;

// -----------------

export const ListBtn = styled.button`
  padding: 0.1em 0.1em 0;
  border: none;
  position: relative;
  cursor: pointer;
  background: var(--clr--main);
  align-self: end;
  right: 5px;

`;

export const AddCross = styled(AddCheck)`

`;