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
  border: 2px solid var(--clr-gray);
  border-bottom: none;
  box-shadow: 
  2px 2px 1px var(--clr-darkgray),
  3px 3px 1px var(--clr-gray),
  5px 5px 2px var(--clr-main),  
  7px 7px 2px var(--clr-darkgray),
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
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 2px solid var(--clr-gray);
  box-shadow: 
  2px 2px 1px var(--clr-darkgray),
  3px 3px 1px var(--clr-gray),
  5px 5px 2px var(--clr-main),  
  7px 7px 2px var(--clr-darkgray),
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
  padding: 1rem 1rem 1rem 0.4rem;
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
  top: 6px;
  right: 6px;
  cursor: pointer;
`;

export const AddArrow = styled.img`
  color: none;

  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in;
  }
`;

// -----------------

export const allDoneBtn = styled.button`
  position: relative;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const AllDoneIcon = styled.img`
border: 2px solid black;
border-radius: 10px;
padding: 1rem 1rem 1rem 0.4rem;
   width: 120px;

  /* &:hover {
    transform: scale(1.3);
    transition: all 0.45s ease-in;
   } */
`;